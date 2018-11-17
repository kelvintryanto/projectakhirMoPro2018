import { NewEventPage } from './../pages/new-event/new-event';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { LoginPage } from '../pages/login/login';
import { LandingpagePage } from '../pages/landingpage/landingpage';
import { SignupFormPage } from '../pages/signup-form/signup-form';
import { AuthService } from '../services/AuthService';
import { UserPage } from '../pages/user/user';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';

/*var config = {
  apiKey: "AIzaSyATSj0PoaezdgxpgHbc5xO7UDnMKp-Vmb4",
  authDomain: "ionic-firebase-e23e2.firebaseapp.com",
  databaseURL: "https://ionic-firebase-e23e2.firebaseio.com",
  projectId: "ionic-firebase-e23e2",
  storageBucket: "ionic-firebase-e23e2.appspot.com",
  messagingSenderId: "153360983849"
};*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    LoginPage,
    LandingpagePage,
    NewEventPage,
    UserPage,
    SignupFormPage

    
  ],
  imports: [
    BrowserModule,
    //AngularFireDatabaseModule,
    //AngularFireModule.initializeApp(config),
   
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    LoginPage,
    LandingpagePage,
    NewEventPage,
    UserPage,
    SignupFormPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
