import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ListHeader } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
//import { FormControl, FormArray } from '@angular/forms/src/model';
//import { Validators } from '@angular/forms/src/validators';
import { UserPage } from '../user/user';
import firebase from 'firebase';
import { Time } from '@angular/common';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from '@angular/fire/database';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public database: AngularFireDatabase) {
  }

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
      leader: keyLeader
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
}
