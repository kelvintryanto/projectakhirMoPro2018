import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToDoListPage } from './add-to-do-list';

@NgModule({
  declarations: [
    AddToDoListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToDoListPage),
  ],
})
export class AddToDoListPageModule {}
