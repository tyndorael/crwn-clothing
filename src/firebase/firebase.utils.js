import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_CONFIG_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_CONFIG_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_CONFIG_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_CONFIG_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_CONFIG_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_CONFIG_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_CONFIG_FIREBASE_APP_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesstore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// google popup
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
