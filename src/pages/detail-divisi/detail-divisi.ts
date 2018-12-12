import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddToDoListPage } from '../add-to-do-list/add-to-do-list';

/**
 * Generated class for the DetailDivisiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-divisi',
  templateUrl: 'detail-divisi.html',
})
export class DetailDivisiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDivisiPage');
  }

  newToDoList(){
    this.navCtrl.push(AddToDoListPage);
  }
}
