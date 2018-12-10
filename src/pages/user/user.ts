import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/AuthService';
import { NewEventPage } from '../new-event/new-event';
import { AngularFireDatabase } from '@angular/fire/database';
import { ItemSliding } from 'ionic-angular';
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
  events: any[];

  // nameApp;config(function($stateProvider, $urlRouterProvider) {
    
  //    $stateProvider
  //      .state('view', {
  //        url: '/movie/:movieid',
  //        templateUrl: 'view.html',
  //        controller: 'ViewCtrl'
  //      });
  //    $urlRouterProvider.otherwise("/");
  //  });


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public database:AngularFireDatabase) {
    database.list('/event').valueChanges().subscribe(event => {
        this.events = event;
    });

  }

  // buat delete tapi gak bisa
  function ($scope, $stateParams) {
    $scope.delete = function(item){
      $scope.event.splice($scope.event.indexOf(item), 1);
    }
  }

  itemClicked(item): void {
      
  }

  //tambah baru ini
  ngOnInit(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  delete(slidingItem: ItemSliding){
    slidingItem.close();
  }

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  newEvent(){
    this.navCtrl.push(NewEventPage);
  }
}
