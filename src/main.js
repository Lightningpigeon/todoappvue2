import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBA9vvgzKSAJ3mFzFOt5ZXXK2pYDDVOVUc",
  authDomain: "vue2todo-99e90.firebaseapp.com",
  projectId: "vue2todo-99e90",
  storageBucket: "vue2todo-99e90.appspot.com",
  messagingSenderId: "1094338436292",
  appId: "1:1094338436292:web:225da4ffc22b93e2bdfd91",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

Vue.config.productionTip = false;

new Vue({
  firebase,
  render: (h) => h(App),
}).$mount("#app");
