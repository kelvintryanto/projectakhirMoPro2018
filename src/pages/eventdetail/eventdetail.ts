import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { database } from 'firebase';
import { AuthService } from '../../services/AuthService';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddCrewPage } from '../add-crew/add-crew';
import firebase from 'firebase';

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
  user: any[];
  nameLeader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public database:AngularFireDatabase) {
  
    database.list('/user').valueChanges().subscribe(user=>{
    this.user=user;
    for (let idx = 0; idx < user.length; idx++) {
      if (this.eventDetail.leader == this.user[idx].keyUser ) {
        this.eventDetail.leader = this.user[idx].username;
        console.log(firebase.auth().currentUser)
      }
    }
   })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailPage');
  }

  ngOnInit(){
    this.eventDetail = this.navParams.get('eventDetail');

    console.log(this.eventDetail)
  }

  onAddDivisi(keyLeader,keyEvent){
    this.navCtrl.push(AddCrewPage,{ keyLeader:keyLeader, keyEvent:keyEvent });
  }
}
