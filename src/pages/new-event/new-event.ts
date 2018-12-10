import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
//import { FormControl, FormArray } from '@angular/forms/src/model';
//import { Validators } from '@angular/forms/src/validators';
import { UserPage } from '../user/user';
import firebase from 'firebase';
import { Time } from '@angular/common';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

  onSubmit(f){
    this.writeEvent(f.EventName,f.StartDate,f.EndDate,f.StartTime,f.EndTime,f.Location,f.EventDescription);
  }

  writeEvent(EventName: string, StartDate: Date, EndDate: Date, StartTime: Time, EndTime: Date, location: any, EventDescription: any) 
  {
    console.log(EventName);
    console.log(StartDate);
    console.log(EndDate);
    console.log(StartTime);
    console.log(EndTime);
    console.log(location);
    console.log(EventDescription);
    const keyEvent = firebase.database().ref().child('event').push().key;
  
    const eventRef= firebase.database().ref().child('event').child(keyEvent);
    eventRef.set({
        keyEvent:keyEvent,
        eventName: EventName,
        startDate: StartDate,
        endDate: EndDate,
        startTime: StartTime,
        endTime: EndTime,
        location: location,
        description: EventDescription
    });
  }

  //tambah baru ini
  ngOnInit(){
  this.initializeForm();
  }

  private initializeForm(){
    this.ngForm = new FormGroup({
      EventName: new FormControl(null, Validators.required),
      StartDate: new FormControl(null, Validators.required),
      EndDate: new FormControl(null, Validators.required), 
      StartTime: new FormControl(null, Validators.required), 
      EndTime: new FormControl(null, Validators.required), 
      Location: new FormControl(null, Validators.required),
      EventDescription: new FormControl(null, Validators.required),  
    });
  }

  onAddEvent(){
    let modal = this.modalCtrl.create(UserPage, {eventValue: this.ngForm.value});
    this.initializeForm();
    modal.present();
  }

}
