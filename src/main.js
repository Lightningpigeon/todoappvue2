import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBhS-6P7yJAS3xjYwcPoSl_D6_AgAdgcQU",
    authDomain: "tododatabase-74989.firebaseapp.com",
    databaseURL: "https://tododatabase-74989-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tododatabase-74989",
    storageBucket: "tododatabase-74989.appspot.com",
    messagingSenderId: "1051030087088",
    appId: "1:1051030087088:web:9140a8fd11db89c1a5e275"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();

Vue.config.productionTip = false

new Vue({
  firebase,
  render: h => h(App),
}).$mount('#app')
