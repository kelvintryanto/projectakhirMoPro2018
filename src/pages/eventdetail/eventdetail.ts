import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { database } from 'firebase';
import { AuthService } from '../../services/AuthService';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the EventdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html',
})
export class EventdetailPage implements OnInit{
  eventDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public database:AngularFireDatabase) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailPage');
  }

  ngOnInit(){
    this.eventDetail = this.navParams.get('eventDetail');
    console.log(this.eventDetail)
  }

}
