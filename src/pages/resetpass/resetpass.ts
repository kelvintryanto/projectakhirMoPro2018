import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, TextInput,ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { ScrollView } from 'ionic-angular/umd/util/scroll-view';
import { AuthService } from "../../services/AuthService";
import { UserPage } from "../user/user";


@IonicPage()
@Component({
  selector: 'page-resetpass',
  templateUrl: 'resetpass.html',
})
export class ResetpassPage {
  ngForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public authsvc:AuthService,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpassPage');
  }

  onSubmit(f){
    console.log(f);
    var toastpass;
    this.authsvc.changePassword(f.CurrentPassword,f.NewPassword).then((response)=>{
      console.log(response);
      if(response){
        this.presentToast("Password Changed.");
        this.navCtrl.setRoot(UserPage);

      }else
      {
        this.presentToast("Failed to Update Password.");
      }
    })
    
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
