import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  userForm: FormGroup;

  ngOnInit(){
    this.initializeForm();
  }

  private initializeForm(){
    this.userForm = new FormGroup({
      username: new FormControl (null, Validators.required),
      password: new FormControl (null, Validators.required),
      email: new FormControl (null, Validators.required),
      address: new FormControl (null, Validators.required)

    })
  }

  onSubmit(){
    console.log(this.userForm.value)
    
  }

}
