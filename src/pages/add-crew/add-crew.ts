import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the AddCrewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-crew',
  templateUrl: 'add-crew.html',
})
export class AddCrewPage implements OnInit {
  currentUser = firebase.auth().currentUser;
  keyEvent: any;
  keyLeader: any;
  user: any[];
  username: any[] = [];
  email:any;
  // user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    this.keyEvent = this.navParams.get('keyEvent')
    this.keyLeader = this.navParams.get('keyLeader')
    // console.log('keyEvent = ' + this.keyEvent)
    // console.log('keyLeader = ' + this.keyLeader)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCrewPage');
  }

  onSubmit(crew) { 
    const crewRef = firebase.database().ref().child('event').child(this.keyEvent).child('divisi').child(crew.divisi)
    
    console.log(crew)
    console.log(this.username)
    for(let idx=0;idx<this.username.length;idx++){
      if(crew.namaCrew==this.username[idx].name){
        console.log(this.username[idx].email)
        this.email = this.username[idx].email;
      }
    }

    crewRef.set({
      crewEmail : this.email,
      divisi : crew.divisi
    })
    
     this.navCtrl.pop();
  }

  

  onKetua() {
    //CEK EVENT DALAM EVENT DATABASE
    // this.database.list('/event').valueChanges().subscribe(event => {
    //   this.event = event;
    //   this.events = []
    //   for (let index = 0; index < event.length; index++) {
        
    //   }
    // });
  }

  onAddCrew(){
    
  }

  ngOnInit(){
    this.database.list('/user').valueChanges().subscribe(user => {
      this.user = user;
      // this.user = []
      for (let index=0; index < user.length; index++) {
        if(this.currentUser.email != this.user[index].email){
          this.username.push({name:this.user[index].username, email:this.user[index].email})
        }        
      }
      // console.log(this.username)
    });
  }

  
}
