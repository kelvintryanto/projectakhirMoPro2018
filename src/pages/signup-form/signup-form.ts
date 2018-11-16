import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
import { UserPage } from '../user/user';
import { SignupService } from '../../services/SignupService';

/**
 * Generated class for the SignupFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-form',
  templateUrl: 'signup-form.html',
})
export class SignupFormPage {
  database:any = firebase.database();

  constructor(public navCtrl: NavController, public navParams: NavParams, public signUpService: SignupService, public AuthSrv: AuthService,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupFormPage');
  }

  userForm: FormGroup;

  ngOnInit(){
    this.initializeForm();
  }

  private initializeForm(){
    this.userForm = new FormGroup({
      username: new FormControl (null, Validators.required),
      password: new FormControl (null, Validators.required),
      confirmpassword: new FormControl (null, Validators.required),
      email: new FormControl (null, Validators.required),
      phonenumber: new FormControl (null, Validators.required)

    })
  }

  onSubmit(){
    console.log(this.userForm.value)
    // this.navCtrl.push(SignupFormPage);
    const password = this.userForm.value.password;
    console.log(password);
    const password2 = this.userForm.value.confirmpassword;
    console.log(password2);
    if (password !== password2 ) {
      console.log('kok')
      this.confirmpassToast();
    } else 
    {
      this.AuthSrv.signup(this.userForm.value.email, this.userForm.value.password).then(data =>{
        console.log('login sukses')
        this.navCtrl.setRoot(UserPage)
      }).catch(err => {
        this.signupToast(err)
      });
    }
    
    this.signUpService.writeUser(this.userForm.value.username, this.userForm.value.email, this.userForm.value.phonenumber)

  }
  email(email: any, password: any): any {
    throw new Error("Method not implemented.");
  }

  signupToast(err) {
    let toast = this.toastCtrl.create({
      message: err.message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  confirmpassToast(){
    let toast = this.toastCtrl.create({
      message: 'password gak sama',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


}
