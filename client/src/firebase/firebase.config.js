// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app





// apiKey: 'AIzaSyBr8N-zxUonds7yiRSb9Fh3drrNMOI_jB8',
// authDomain: 'food-app-48535.firebaseapp.com',
// projectId: 'food-app-48535',
// storageBucket: 'food-app-48535.appspot.com' ,
// messagingSenderId: '838301867756' ,
// appId:'1:838301867756:web:d7e115ed461f512c5e4fc9', 
// }