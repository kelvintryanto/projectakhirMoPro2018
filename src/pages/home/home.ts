import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
import { UserPage } from '../user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = firebase.auth().currentUser;

  constructor(public navCtrl: NavController) {
    if(this.user!=null){
      this.navCtrl.setRoot(UserPage);
    }
  }

  slider = [
    {
      image:"assets/imgs/test1.jpg"
    },
    {
      image:"assets/imgs/test2.jpg"
    },
    {
      image:"assets/imgs/test3.png"
    }
    
  ];
  
  LoginPage(){
    console.log("LoginPage");
    this.navCtrl.setRoot(LoginPage);
  }

  gotoHome(){
    this.navCtrl.push(LoginPage)
  }
}
