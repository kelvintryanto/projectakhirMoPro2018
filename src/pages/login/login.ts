import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormPage } from '../form/form';
import { LandingpagePage } from '../landingpage/landingpage';


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

  // LoginPage(){
  //   console.log("Username: "+ this.username);
  //   console.log("Password: "+ this.password);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  FormPage(){
    console.log("FormPage")
    this.navCtrl.push(FormPage);
  }

  goToLanding(){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);
    this.navCtrl.push(LandingpagePage);
  }


}