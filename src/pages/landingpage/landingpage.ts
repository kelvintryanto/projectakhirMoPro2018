import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { AuthService } from '../../services/AuthService';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LandingpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landingpage',
  templateUrl: 'landingpage.html',
})
export class LandingpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthSrv: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingpagePage');
  }

  logout(){
    this.AuthSrv.logout();
    this.navCtrl.push(LoginPage);
  }

}
