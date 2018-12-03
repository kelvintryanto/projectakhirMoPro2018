import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCrewPage } from './add-crew';

@NgModule({
  declarations: [
    AddCrewPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCrewPage),
  ],
})
export class AddCrewPageModule {}
