import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    // this.initializeForm();
  }
  
  // private initializeForm() {
  //   this.ngForm = new FormGroup({
  //     eventName:  new FormControl(null, Validators.required),
  //     startDate:  new FormControl(null, Validators.required),
  //     endDate:  new FormControl(null, Validators.required),
  //     startTime:  new FormControl(null, Validators.required),
  //     endTime:  new FormControl(null, Validators.required),
  //     eventDescription:  new FormControl(null, Validators.required)
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

  onSubmit(f){
    console.log(f);
  }
}
