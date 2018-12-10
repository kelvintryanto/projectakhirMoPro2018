import firebase from "firebase";

export class SignupService{    
    writeUser(username:string, email:string, phonenumber:number){ 
        console.log(username);
        // membuat unique key untuk user
        const keyUser = firebase.database().ref().child('user').push().key;

        // memanggil database user dan masuk ke child yang baru
        const userRef= firebase.database().ref().child('user').child(keyUser);
        userRef.set({
            keyUser: keyUser,
            username: username,
            email: email,
            phonenumber: phonenumber
        });
        
    }
   }