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
import { ResetpassPage } from '../pages/resetpass/resetpass';
import { SignupService } from '../services/SignupService';


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
    ResetpassPage

    
  ],
  imports: [
    BrowserModule,
   
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
    SignupFormPage,
    ResetpassPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    SignupService
  ]
})
export class AppModule {}
