import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
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
  keyDivisi: any;
  keyCrew: any;
  user: any[];
  userCrew:any[];
  username: any[] = [];
  email:any;
  emailCrew: any;
  // user: any;

  constructor(private toastController: ToastController, public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {
    this.keyEvent = this.navParams.get('keyEvent')
    this.keyLeader = this.navParams.get('keyLeader')
    // console.log('keyEvent = ' + this.keyEvent)
    // console.log('keyLeader = ' + this.keyLeader)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCrewPage');
  }

  onSubmit(crew) { 
    this.keyDivisi = firebase.database().ref().child('event').child(this.keyEvent).child('divisi').push().key;
    const crewRef = firebase.database().ref().child('event').child(this.keyEvent).child('divisi').child(this.keyDivisi)

    this.database.list('/user').valueChanges().subscribe(user=>{
      this.userCrew = user;
      for(let idx=0;idx<user.length;idx++){
        if(this.userCrew[idx]==crew.namaCrew){
          this.userCrew[idx].keyUser
          this.keyCrew = this.user[idx].keyUser
          this.emailCrew = this.user[idx].email
        }
      }
    })
    
    if(crewRef!==undefined){
      console.log("masuk tidak undefined")
      crewRef.update({
        namaDivisi: crew.divisi,
        keyDivisi: this.keyDivisi,
        toDoList: null,
        progress: null,
        crew: {
          keyCrew: this.keyCrew,
          namaCrew: crew.namaCrew,
          emailCrew: this.emailCrew,
          jabatanCrew: crew.position
        }
      })
    }
    else{
      console.log("masuk undefined")
      crewRef.set({
        namaDivisi: crew.divisi,
        keyDivisi: this.keyDivisi,
        toDoList: null,
        progress: null,
        crew: {
          keyCrew: this.keyCrew,
          namaCrew: crew.namaCrew,
          emailCrew: this.emailCrew,
          jabatanCrew: crew.position
        }
      })
    }
    

    console.log(crew)
    console.log(this.username)
    for(let idx=0;idx<this.username.length;idx++){
      if(crew.namaCrew==this.username[idx].name){
        // mengambil email jika usernamenya sama dengan yang ada dengan inputan user
        console.log(this.username[idx].email)
        this.email = this.username[idx].email;

        let addTodoToast= this.toastController.create({
          message:"Crew Added!",
          duration: 3000
        })
        addTodoToast.present();
      }
    }

    // crewRef.set({
    //   crewEmail : this.email,
    //   divisi : crew.divisi
    // })
    
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
