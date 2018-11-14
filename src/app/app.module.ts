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

import { UserPage } from '../pages/user/user';

import { SignupFormPage } from '../pages/signup-form/signup-form';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    LoginPage,
    LandingpagePage,
<<<<<<< HEAD
    NewEventPage
=======
>>>>>>> ec19aa75badff7286835b55e2bdafd77cea3c7ea
    UserPage,
    SignupFormPage

    
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
<<<<<<< HEAD
    NewEventPage
=======
>>>>>>> ec19aa75badff7286835b55e2bdafd77cea3c7ea
    UserPage,

    SignupFormPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
