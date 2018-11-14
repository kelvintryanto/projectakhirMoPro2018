import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the SignupFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-form',
  templateUrl: 'signup-form.html',
})
export class SignupFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupFormPage');
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
    this.navCtrl.push(SignupFormPage);
    
  }


}
