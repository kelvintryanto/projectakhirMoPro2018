import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slider = [
    {
      .bg-image{
        background-image: url('../../assets/imgs/test1.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    },
    {
      .bg-image2{
        background-image: url('../../assets/imgs/test2.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    },
    {
      image:"assets/imgs/test3.png"
    }
  ];

}
