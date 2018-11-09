import { LoginPage } from './login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  LoginPage(){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
