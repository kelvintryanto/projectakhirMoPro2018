import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupFormPage } from './signup-form';

@NgModule({
  declarations: [
    SignupFormPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupFormPage),
  ],
})
export class SignupFormPageModule {}
