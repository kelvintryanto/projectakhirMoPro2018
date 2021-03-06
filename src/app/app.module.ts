import { AboutusPage } from './../pages/aboutus/aboutus';
import { NewEventPage } from './../pages/new-event/new-event';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ProgressBarModule } from 'angular-progress-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { LoginPage } from '../pages/login/login';
import { LandingpagePage } from '../pages/landingpage/landingpage';
import { SignupFormPage } from '../pages/signup-form/signup-form';
import { AuthService } from '../services/AuthService';
import { UserPage } from '../pages/user/user';
import { SignupService } from '../services/SignupService';
import { ResetpassPage } from '../pages/resetpass/resetpass';
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { EditEventPage } from '../pages/edit-event/edit-event';
import { AddCrewPage } from '../pages/add-crew/add-crew';
import { ExamplePage } from '../pages/example/example';
import { AddToDoListPage } from '../pages/add-to-do-list/add-to-do-list';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/firebase.app.module';
import { ImagePicker } from "@ionic-native/image-picker";
import { Base64 } from '@ionic-native/base64';
import { DetailDivisiPage } from '../pages/detail-divisi/detail-divisi';


var config = {
  apiKey: "AIzaSyATSj0PoaezdgxpgHbc5xO7UDnMKp-Vmb4",
  authDomain: "ionic-firebase-e23e2.firebaseapp.com",
  databaseURL: "https://ionic-firebase-e23e2.firebaseio.com",
  projectId: "ionic-firebase-e23e2",
  storageBucket: "ionic-firebase-e23e2.appspot.com",
  messagingSenderId: "153360983849"
};
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }
// firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    LoginPage,
    LandingpagePage,
    NewEventPage,
    UserPage,
    SignupFormPage,
    ResetpassPage,
    EventdetailPage,
    EditEventPage,
    AddCrewPage,
    AddToDoListPage,
    ExamplePage,
    DetailDivisiPage,
    AboutusPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
   
    IonicModule.forRoot(MyApp),
    ProgressBarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutusPage,
    FormPage,
    LoginPage,
    LandingpagePage,
    NewEventPage,
    UserPage,
    SignupFormPage,
    ResetpassPage,
    EventdetailPage,
    EditEventPage,
    AddCrewPage,
    AddToDoListPage,
    ExamplePage,
    DetailDivisiPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    SignupService,
    AngularFireDatabase,
    Camera,
    ImagePicker,
    Base64
  ]
})
export class AppModule {}
