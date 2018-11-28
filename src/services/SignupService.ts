import firebase from "firebase";

export class SignupService{
    users: {nama: string, email: string, phonenumber: number};
    
    namaa: any;
    
    writeUser(user){   
        // this.user.email = user.email;
        // this.user.phonenumber = user.phonenumber;

        // membuat unique key untuk user
        const keyUser= firebase.database().ref().child('user').push().key;

        // memanggil database user dan masuk ke child yang baru
        // const userRef= firebase.database().ref().child('user').child(keyUser);
        // userRef.set(this.users);
        
    }
   }