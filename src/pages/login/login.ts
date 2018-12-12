import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from "ionic-angular";
// import { LandingpagePage } from "../landingpage/landingpage";
import { SignupFormPage } from "../signup-form/signup-form";
import { AuthService } from "../../services/AuthService";
import { UserPage } from "../user/user";
import firebase from "firebase";
import { FormGroup } from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  ngForm: FormGroup;
  email: string;
  password: string;
  user = firebase.auth().currentUser;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {}

  // LoginPage(){
  //   console.log("Username: "+ this.username);
  //   console.log("Password: "+ this.password);
  // }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  goToSignupForm() {
    console.log("SignupFormPage");
    this.navCtrl.push(SignupFormPage);
  }

  goToLanding(f) {
    let movepageLoadingController = this.loadingCtrl.create();
    movepageLoadingController.present();
    this.authService.signin(f.email, f.password).then(data =>{
      console.log('Login Success');
      if(this.user!=null){
        this.navCtrl.setRoot(UserPage);
      }
      movepageLoadingController.dismiss();
    }).catch(err => {
      this.ErrorSigninToast();
      movepageLoadingController.dismiss();
    });
    
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Gokil, Gue Login Bosque!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ErrorSigninToast() {
    let toast = this.toastCtrl.create({
      message: 'Username atau Password Salah Bosque!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
