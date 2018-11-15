import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LandingpagePage } from "../landingpage/landingpage";
import { SignupFormPage } from "../signup-form/signup-form";
import { AuthService } from "../../services/AuthService";

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
    public AuthSrv: AuthService
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
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);
    this.AuthSrv.signin(this.email, this.password).then(data =>{
      console.log('login sukses')
      this.navCtrl.setRoot(LandingpagePage)
    }).catch(err => console.log(err));
    
   // this.navCtrl.push(LandingpagePage);
  }
}
