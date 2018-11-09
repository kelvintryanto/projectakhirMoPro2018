import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
 
  GoToLogin(){
    console.log("GoToLogin")
    this.navCtrl.push(LoginPage)
  }
}
