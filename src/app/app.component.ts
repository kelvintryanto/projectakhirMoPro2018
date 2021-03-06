import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResetpassPage } from '../pages/resetpass/resetpass';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/AuthService';
import { UserPage } from '../pages/user/user';
import { AboutusPage } from '../pages/aboutus/aboutus';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage; //HomePage
  loginPage:any = LoginPage;
  ResetpassPage:any = ResetpassPage;
  aboutusPage:any = AboutusPage;

  @ViewChild('sideMenuContent') navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, 
    private authService:AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
    apiKey: "AIzaSyATSj0PoaezdgxpgHbc5xO7UDnMKp-Vmb4",
    authDomain: "ionic-firebase-e23e2.firebaseapp.com",
    databaseURL: "https://ionic-firebase-e23e2.firebaseio.com",
    projectId: "ionic-firebase-e23e2",
    storageBucket: "ionic-firebase-e23e2.appspot.com",
    messagingSenderId: "153360983849"
    });

    firebase.auth().onAuthStateChanged(user => {  
      if(user) {
        //do something here if the user is logged in
        console.log("i'm logged in")
        if(user!=null){
          this.navCtrl.setRoot(UserPage);
        }
        // this.rootPage = LandingpagePage
      }

      else {
        //do something here if the user is not logged in
        console.log("you're logged out")
      }

    });
  }

  onLoad(page:any) {
    this.navCtrl.setRoot(page);
    this.menuCtrl.close();
  }

  Logout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
    this.menuCtrl.close();
  }

  aboutus(){
    this.navCtrl.setRoot(AboutusPage)
    this.menuCtrl.close();
  }

  changePass(){
    // this.authService.logout();
    this.navCtrl.push(ResetpassPage);
    this.menuCtrl.close();
  }
}
