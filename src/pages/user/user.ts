import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/AuthService';
import { NewEventPage } from '../new-event/new-event';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  newEvent(){
    this.navCtrl.push(NewEventPage);
  }
}
