import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/AuthService';
import { NewEventPage } from '../new-event/new-event';
import { AngularFireDatabase } from '@angular/fire/database'
import { EventdetailPage } from '../eventdetail/eventdetail';
// import {EventdetailPage } from '../eventdetail/eventdetail';
// import firebase from 'firebase';

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
  events: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public database:AngularFireDatabase) {
    database.list('/event').valueChanges().subscribe(event => {
        this.events = event;
    });

  }

  //tambah baru ini
  ngOnInit(){
    
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

  removeItem(event){
    console.log(event);
  }

  detailEvent(event){
    this.navCtrl.push(EventdetailPage, {eventDetail: event})
  }
}
