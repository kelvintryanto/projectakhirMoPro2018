import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserPage } from '../user/user';
import firebase from 'firebase';

/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {
  editEvent: any;

  constructor(private toastController: ToastController, public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }

  ngOnInit(){
    this.editEvent = this.navParams.get('editEvent');
    // console.log(this.editEvent)
  }

  onUpdate(editEvent){
    const crewRef = firebase.database().ref().child('event').child(this.editEvent.keyEvent);

    crewRef.update({
      eventName:editEvent.EventName,
      startDate: editEvent.StartDate,
      endDate: editEvent.EndDate,
      startTime: editEvent.StartTime,
      endTime: editEvent.EndTime,
      location: editEvent.Location,
      description: editEvent.EventDescription
    });

    this.navCtrl.setRoot(UserPage)

    let addTodoToast= this.toastController.create({
      message:"Hurray! Your Event is Updated!",
      duration: 3000
    })
    addTodoToast.present();
  }
}
