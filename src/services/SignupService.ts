import firebase from "firebase";
import { User } from "../data/userdata.interface";

export class SignupService{
    
    writeUser(nama: string, email: string, phonenumber: number){
        // const nama,email,phonenumber;
        
        const keyUser= firebase.database().ref().child('user').push().key
        const userRef= firebase.database().ref().child('user').child(keyUser);
        // userRef.set(nama:nama);
        // userRef.set(email:email);
        // userRef.set(phonenumber:phonenumber);
        
        
    }
   }