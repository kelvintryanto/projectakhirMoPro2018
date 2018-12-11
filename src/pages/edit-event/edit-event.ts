import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';

/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {
editEvent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }

  ngOnInit(){
    this.editEvent = this.navParams.get('editEvent');

    console.log(this.editEvent)
  }

  onUpdate(event){
    console.log(event);
    this.navCtrl.setRoot(UserPage)
  }
}
