import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/AuthService';
import { NewEventPage } from '../new-event/new-event';
import { AngularFireDatabase } from '@angular/fire/database'
import { EventdetailPage } from '../eventdetail/eventdetail';
import firebase, { storage } from 'firebase';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { EditEventPage } from '../edit-event/edit-event';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
// import {EventdetailPage } from '../eventdetail/eventdetail';
// import firebase from 'firebase';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// var nameApp = angular.module('starter', ['ionic']);



@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  events: any[] = [];
  event: any[];
  users = firebase.auth().currentUser;
  user: any[];
  storage: any = firebase.storage();


  // nameApp;config(function($stateProvider, $urlRouterProvider) {

  //    $stateProvider
  //      .state('view', {
  //        url: '/movie/:movieid',
  //        templateUrl: 'view.html',
  //        controller: 'ViewCtrl'
  //      });
  //    $urlRouterProvider.otherwise("/");
  //  });


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthService, 
    public database: AngularFireDatabase,
    public alertCtrl:AlertController,
    private domSanitizer:DomSanitizer) {

    //ini untuk narik data user
    database.list('/user').valueChanges().subscribe(user => {
      this.user = user;
      for (let idx = 0; idx < user.length; idx++) {
        if (this.users.email == this.user[idx].email) {
          //CEK EVENT DALAM EVENT DATABASE  
          database.list('/event').valueChanges().subscribe(event => {
            this.event = event;
            this.events = []
            for (let index = 0; index < event.length; index++) {
              if (this.event[index].leader == this.user[idx].keyUser) {
                this.events.push(this.event[index]);
              }
            }
          });
        }
      }
    })

  }

  //tambah baru ini
  ngOnInit() {

  }

  getImage(image){
    console.log('kemak')
    
    return this.storage.ref(image + '/pic.png').getDownloadURL().then((url)=>{
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element:
      console.log(url)
      return url;
   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  logout() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  newEvent() {
    this.navCtrl.push(NewEventPage);
  }

  detailEvent(event) {
    this.navCtrl.push(EventdetailPage, { eventDetail: event })
  }

  onDeleteItem(event){
    let alert = this.alertCtrl.create({
      title: 'Delete Event?',
      message: 'Are you sure want to delete this event?',
      buttons:[
        {
          text: 'Yes',
          handler: () => {
            firebase.database().ref().child('event').child(event.keyEvent).remove();
            // console.log(event.keyEvent)
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('no clicked')
          }
        }
      ]
    })
    alert.present()

    console.log(event)
  }

  onEditItem(event){
    this.navCtrl.push(EditEventPage);
    console.log(event);
  }
  parseUrl(url){
    url="data:image/png;charset=utf-8;base64, "+url;
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
}
