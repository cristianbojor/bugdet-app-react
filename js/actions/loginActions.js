import firebase from "firebase";

export function login(auth) {
  console.log(auth);

  return firebase.auth().signInWithEmailAndPassword(auth.email, auth.password).then(user_data => {
    console.log('firebase login success');
    return user_data;
  }).catch((error)=> {
    if (error) {
      console.log('error', error);
      alert('Login Failed. Please try again');
    }
  });
}
