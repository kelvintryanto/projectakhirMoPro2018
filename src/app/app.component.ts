import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/AuthService';
//import { ResetpassPage } from '../pages/resetpass/resetpass';
// import { LandingpagePage } from '../pages/landingpage/landingpage';
// import { FormPage } from '../pages/form/form';
 import { UserPage } from '../pages/user/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UserPage;
  loginPage:any = LoginPage;

  @ViewChild('sideMenuContent') navCtrl: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, 
    private authService:AuthService,
    private toastCtrl:ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyATSj0PoaezdgxpgHbc5xO7UDnMKp-Vmb4",
      authDomain: "ionic-firebase-e23e2.firebaseapp.com",
      databaseURL: "https://ionic-firebase-e23e2.firebaseio.com/"
    });

    firebase.auth().onAuthStateChanged(user => {
    //     this.authService.signin('kelvin.tryanto@gmail.com', '12345678');
  
      if(user) {
        //do something here if the user is logged in
        console.log("i'm logged in")
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

  changePass(){
    let toast = this.toastCtrl.create({
      message: 'ganti di app.component.ts!',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
    this.menuCtrl.close()
  }
}

