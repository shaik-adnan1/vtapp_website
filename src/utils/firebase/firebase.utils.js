import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFhcJULxBaJv6kMVAjVWD5x6U6H9yJzvM",
  authDomain: "vtapp-9dbbc.firebaseapp.com",
  projectId: "vtapp-9dbbc",
  storageBucket: "vtapp-9dbbc.appspot.com",
  messagingSenderId: "98159693291",
  appId: "1:98159693291:web:d0cbebeb56364ae38f1dae",
};

// Initialize Firebase - with our configurations provided by firebase
const firebaseApp = initializeApp(firebaseConfig);

// inorder to use the authentication, we need to initialise a provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  // configuration object
  prompt: "select_account",
});
