import { NewEventPage } from './../pages/new-event/new-event';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { AuthService } from '../services/AuthService';
// import { FormPage } from '../pages/form/form';
// import { UserPage } from '../pages/user/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = HomePage;
  
=======
  rootPage:any = NewEventPage;
>>>>>>> 710d71eb1aaf484b36c069d5228ab6f183f64483

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyATSj0PoaezdgxpgHbc5xO7UDnMKp-Vmb4",
      authDomain: "ionic-firebase-e23e2.firebaseapp.com",
    });

    firebase.auth().onAuthStateChanged(user => {
      this.authService.signin('kelvin.tryanto@gmail.com', '12345678');
  
      if(user) {
         //do something here if the user is logged in
         console.log("i'm logged in")
      }
      else {
         //do something here if the user is not logged in
         console.log("you're not logged in")
      }
    });
  }
}

