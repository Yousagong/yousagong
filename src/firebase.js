//firebase.js
import firebase from "firebase/compat/app";
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjw2cNA4xCJbEeDcehM5qiKjkXWXlbqoc",
  authDomain: "yousagong-43eca.firebaseapp.com",
  projectId: "yousagong-43eca",
  storageBucket: "yousagong-43eca.appspot.com",
  messagingSenderId: "245757372474",
  appId: "1:245757372474:web:6f3fe98f5f81e7b18ead03",
  measurementId: "G-2Z4P3WLEFX",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// // firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
const app = initializeApp(firebaseConfig);
const fireStore = getAnalytics(app);
const authService = getAuth(app);
const db = getFirestore(app);

export { fireStore, authService, db, app };
