import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService';
import { LandingpagePage } from '../landingpage/landingpage';
import { LoginPage } from '../login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthSrv: AuthService) {
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
      confirmpassword: new FormControl (null, Validators.required),
      email: new FormControl (null, Validators.required),
      address: new FormControl (null, Validators.required)

    })
  }

  onSubmit(){
    console.log(this.userForm.value)
    this.navCtrl.push(SignupFormPage);
    this.AuthSrv.signup(this.userForm.value.email, this.userForm.value.password).then(data =>{
      console.log('login sukses')
      this.navCtrl.setRoot(LoginPage)
    }).catch(err => console.log(err));
    
  }
  email(email: any, password: any): any {
    throw new Error("Method not implemented.");
  }


}
