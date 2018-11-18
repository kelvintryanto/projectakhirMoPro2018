import firebase from 'firebase';
import 'firebase/auth'
import { resolveDefinition } from '@angular/core/src/view/util';

export class AuthService{
 signup(email: string, password: string) {
  return firebase.auth().createUserWithEmailAndPassword(email,password);
 }
 signin(email:string, password: string) {
  var user;
  user = firebase.auth().signInWithEmailAndPassword(email, password);
  console.log(user);
  return user;
 }

 reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    console.log("USER");
    console.log(user);
    var cred = firebase.auth.EmailAuthProvider.credential(
        user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }

  changePassword(currentPassword, newPassword):Promise<any> {
    // this.reauthenticate(currentPassword).then(() => {
    return new Promise(function(resolve) {
        var user = firebase.auth().currentUser;
        console.log("USER");
        console.log(user);
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        var user = firebase.auth().currentUser;
        user.reauthenticateWithCredential(cred).then(()=>{
            user.updatePassword(newPassword).then(() => {
                console.log("Password updated!");
                resolve(true);
            }).catch((error) => { console.log(error); resolve(false); });
        }).catch((error)=>{
            console.log(error);
            resolve(false);
        })
    })
            
    // }).catch((error) => { console.log(error); return false; });
  }

  


 logout() {
  firebase.auth().signOut();
 }
}