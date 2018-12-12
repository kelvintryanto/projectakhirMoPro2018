import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/AuthService';
import { NewEventPage } from '../new-event/new-event';
import { AngularFireDatabase } from '@angular/fire/database'
import { EventdetailPage } from '../eventdetail/eventdetail';
import firebase from 'firebase';
import { EditEventPage } from '../edit-event/edit-event';
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
  emailDivisi: any[] = [];

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
    public alertCtrl:AlertController) {

    //ini untuk narik data user
    database.list('/user').valueChanges().subscribe(user => {
      this.user = user;
      for (let idx = 0; idx < user.length; idx++) {
        if (this.users.email == this.user[idx].email) {
          //CEK EVENT DALAM EVENT DATABASE  
          database.list('/event').valueChanges().subscribe(event => {
            this.event = event;
            // console.log(this.event)
            this.events = []
            for (let index = 0; index < event.length; index++) {
              if (this.event[index].leader == this.user[idx].keyUser ) {
                // || this.event[index].divisi.acara.crewEmail == this.users[index].email
                // console.log(this.event[index].divisi.acara)
                this.events.push(this.event[index]);
              }
              //ini untuk cek apakah currentUser diinvite oleh orang lain
              if(this.user[idx].email == this.checkDivisi(this.event[index].divisi)){
                //kalau ada masukkan di daftar events untuk ditampilkan
                this.events.push(this.event[index])
              }
            }
          });
        }
      }
    })
  }

  //checkDivisi adalah fungsi yang menerima semua divisi yang ada di dalam event
  //undefined berarti ga ada folder yang namanya divisi
  checkDivisi(divisi: any): any {
    //cek kalo divisinya ada baru tampilkan !== artinya ga kosong
    if(divisi!==undefined){
      this.emailDivisi.push(divisi.acara.crewEmail);
      
      return this.emailDivisi
      
    }
    //sudah sampai di sini, coba cari cara untuk ada atau engganya cek di sini
  }

  //tambah baru ini
  ngOnInit() {

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
    this.navCtrl.push(EditEventPage, { editEvent: event });
    console.log(event);
  }

  //tambahkan onLeader() return true or false untuk ngIf
  //kalo dy ketua baru bisa delete kalo engga, ga bisa delete, ga bisa edit juga
  //tambahkan "you are on divisi ??? menggantikan button"
}