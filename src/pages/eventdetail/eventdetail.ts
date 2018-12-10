import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html',
})
export class EventdetailPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailPage');
  }

  ngOnInit(){
    console.log(this.navParams.get('eventDetail'));
  }

}
