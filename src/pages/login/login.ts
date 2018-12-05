import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from "ionic-angular";
// import { LandingpagePage } from "../landingpage/landingpage";
import { SignupFormPage } from "../signup-form/signup-form";
import { AuthService } from "../../services/AuthService";
import { UserPage } from "../user/user";

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
  email: string;
  password: string;

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

  goToLanding() {
    // console.log("Email: " + this.email);
    // console.log("Password: " + this.password);
    let movepageLoadingController = this.loadingCtrl.create();
    movepageLoadingController.present();
    this.authService.signin(this.email, this.password).then(data =>{
      console.log('Login Success');
      this.navCtrl.setRoot(UserPage);
      movepageLoadingController.dismiss();
    }).catch(err => {
      this.ErrorSigninToast();
      movepageLoadingController.dismiss();
    });
    
   // this.navCtrl.push(LandingpagePage);
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
