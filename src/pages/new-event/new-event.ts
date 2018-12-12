import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
//import { FormControl, FormArray } from '@angular/forms/src/model';
//import { Validators } from '@angular/forms/src/validators';
//import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import firebase from 'firebase';
import { Time } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/database';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera'
import { from } from 'rxjs';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import * as moment from 'moment';

/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {
  ngForm: FormGroup;
  users = firebase.auth().currentUser;
  keyLeader: any;
  user: any[];
  image:any;

  picdata:any
  picurl:any
  mypicref:any;
  
  StartTime:any;
  EndTime:any;

  constructor(public camera: Camera,
    private imagePicker: ImagePicker, 
    private base64: Base64, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastController: ToastController, 
    public modalCtrl: ModalController, 
    public database: AngularFireDatabase) {
    this.mypicref=firebase.storage().ref('/')
  }
  takepic(){
    this.camera.getPicture({
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.CAMERA,
      encodingType:this.camera.EncodingType.PNG,
      saveToPhotoAlbum:true
    }).then(imagedata=>{
      this.picdata=imagedata;
      console.log(this.picdata)
      // this.upload()
    })
  }
  upload(){
    this.mypicref.child(this.uid()).child('pic.png')
    .putString(this.picdata,'base64',{contentType:'image/png'})
    .then(savepic=>{
      console.log(savepic.downloadURL())
      this.picurl=savepic.downloadURL()
    })
  }

  uid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    this.image = uuid;
    console.log(uuid)
    return uuid;
  }
  Start(a){
    console.log("Start")
    console.log(a);
    this.StartTime=a;
  }

  End(b){
    console.log("End")
    console.log(b);
    this.EndTime=b;
  }

  // tes1(time){
  //   console.log('jalan StartTime')
  //   if(!this.StartTime){
  //     this.StartTime=moment().format();
  //   }
  // }

  // tes2(time){
  //   console.log('jalan EndTime')
  //   if(!this.EndTime){
  //     this.EndTime=moment().format();
  //   }
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

  onSubmit(f) {
    this.database.list('/user').valueChanges().subscribe(user => {
      this.user = user;
      console.log(user);
      //mengambil keyCurrent User untuk memasukkan keyLeader
      for (let idx = 0; idx < user.length; idx++) {
        if (this.user[idx].email == this.users.email) {
          this.keyLeader = this.user[idx].keyUser;
          this.writeEvent(f.EventName, f.StartDate, f.EndDate, f.StartTime, f.EndTime, f.Location, f.EventDescription, this.keyLeader);

          let addTodoToast= this.toastController.create({
            message:"Hurray! Your Event is Added!",
            duration: 3000
          })
          addTodoToast.present();

        }
      }
    })

    this.navCtrl.setRoot(UserPage);
  }

  writeEvent(EventName: string, StartDate: Date, EndDate: Date, StartTime: Time, EndTime: Date, location: any, EventDescription: any, keyLeader: any) {
    const keyEvent = firebase.database().ref().child('event').push().key;
    const eventRef = firebase.database().ref().child('event').child(keyEvent);
    eventRef.set({
      keyEvent: keyEvent,
      eventName: EventName,
      startDate: StartDate,
      endDate: EndDate,
      startTime: StartTime,
      endTime: EndTime,
      location: location,
      description: EventDescription,
      leader: keyLeader,
      image: this.picdata
    });
  }

  //tambah baru ini
  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.ngForm = new FormGroup({
      keyEvent: new FormControl(null, Validators.required),
      EventName: new FormControl(null, Validators.required),
      StartDate: new FormControl(null, Validators.required),
      EndDate: new FormControl(null, Validators.required),
      StartTime: new FormControl(null, Validators.required),
      EndTime: new FormControl(null, Validators.required),
      Location: new FormControl(null, Validators.required),
      EventDescription: new FormControl(null, Validators.required),
    });
  }

  // myDate:any = new Date().toISOString();
  // myDate.setMinute(myDate.getMinutes() - myDate.getTimezoneOffset());
  // var now = moment();
  // this.myDate = moment (now.format(), moment.ISO_8601).format();

}
