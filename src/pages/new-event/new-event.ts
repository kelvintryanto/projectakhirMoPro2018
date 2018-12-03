import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
//import { FormControl, FormArray } from '@angular/forms/src/model';
//import { Validators } from '@angular/forms/src/validators';
import { UserPage } from '../user/user';
import firebase from 'firebase';

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
    console.log(f);
    this.writeEvent(this.ngForm.value.EventName,this.ngForm.value.StartDate,this.ngForm.value.EndDate,this.ngForm.value.StartTime,this.ngForm.value.EndTime,this.ngForm.value.Location,this.ngForm.value.EventDescription);
  }

  writeEvent(EventName: string, StartDate: any, EndDate: any, StartTime: any, EndTime: any, location: any, EventDescription: any) {
    // throw new Error("Method not implemented.");
    const keyEvent= firebase.database().ref().child('event').push().key;

    const eventRef= firebase.database().ref().child('event').child(keyEvent);
        eventRef.set({
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
    //pembimbingArray: new FormArray([new FormControl(null, Validators.required), new FormControl(null), new FormControl(false)])
  });
}

onAddEvent(){
  let modal = this.modalCtrl.create(UserPage, {eventValue: this.ngForm.value});
  this.initializeForm();
  // console.log(this.ngForm.value);
  modal.present();
}

}
