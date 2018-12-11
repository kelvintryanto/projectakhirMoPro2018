import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the AddCrewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-crew',
  templateUrl: 'add-crew.html',
})
export class AddCrewPage {
  user = firebase.auth().currentUser;
  event: any[];
  events: any[] = []
  keyEvent: any;
  keyLeader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    this.keyEvent = this.navParams.get('keyEvent')
    this.keyLeader = this.navParams.get('keyLeader')
    console.log('keyEvent = ' + this.keyEvent)
    console.log('keyLeader = ' + this.keyLeader)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCrewPage');
  }

  onSubmit(crew) {
    console.log(crew);
    this.navCtrl.pop();
  }

  onKetua() {
    //CEK EVENT DALAM EVENT DATABASE
    this.database.list('/event').valueChanges().subscribe(event => {
      this.event = event;
      this.events = []
      for (let index = 0; index < event.length; index++) {
        
      }
    });
  }
}
