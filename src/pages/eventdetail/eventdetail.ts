import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddCrewPage } from '../add-crew/add-crew';
import { DetailDivisiPage } from '../detail-divisi/detail-divisi';
import firebase from 'firebase';

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
export class EventdetailPage implements OnInit {
  eventDetail: any;
  user: any[];
  nameLeader: any;
  period: any;
  time: any;
  keyEvent: any;
  divisi: any[] = [];
  divisiTemplate: any[] =[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public database: AngularFireDatabase, public alertCtrl: AlertController) {
    //merubah nama leader dalam event detail
    database.list('/user').valueChanges().subscribe(user => {
      this.user = user;
      for (let idx = 0; idx < user.length; idx++) {
        if (this.eventDetail.leader == this.user[idx].keyUser) {
          this.nameLeader = this.user[idx].username;
        }
      }
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailPage');
  }

  ngOnInit() {
    this.eventDetail = this.navParams.get('eventDetail');
    if (this.eventDetail.startDate == this.eventDetail.endDate) {
      this.period = this.eventDetail.startDate;
    } else {
      this.period = this.eventDetail.startDate + "  -  " + this.eventDetail.endDate
    }

    this.eventDetail = this.navParams.get('eventDetail');
    if (this.eventDetail.startTime == this.eventDetail.endTime) {
      this.time = this.eventDetail.startTime;
    } else {
      this.time = this.eventDetail.startTime + "  -  " + this.eventDetail.endTime
    }

    this.database.list('/divisi').valueChanges().subscribe(divisi => {
      console.log("masuk sini")
      this.divisi = divisi;
      for(let idx=0; idx<divisi.length;idx++){
        this.divisiTemplate.push(this.divisi[idx].namaDivisi)
      }
      console.log(this.divisiTemplate)
    })

    
    console.log(this.eventDetail)
  }

  onAddDivisi(keyLeader, keyEvent) {
    this.navCtrl.push(AddCrewPage, { keyLeader: keyLeader, keyEvent: keyEvent });
  }

  //terima parameter detail divisi yang berisi nama divisi, to-do-list dan crew-list
  divisiDetail() {
    this.navCtrl.push(DetailDivisiPage)
  }

  presentPrompt(keyEvent) {
    let alert = this.alertCtrl.create({
      title: 'Add Divisi',
      inputs: [
        {
          name: 'divisi',
          placeholder: 'divisi'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Divisi',
          handler: data => {
            const keyDivisi = firebase.database().ref('divisi').push().key
            console.log(keyDivisi)
            firebase.database().ref('divisi').child(keyDivisi).set({
              keyEvent: keyEvent,
              keyDivisi: keyDivisi,
              namaDivisi: data.divisi,
              progress: ""
            })
          }
        }
      ]
    });
    alert.present();
  }

}
