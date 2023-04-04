import React from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
} from "firebase/firestore/lite";

export default function Firebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCGzJYJMtNYvxfjKIh2xKKliR60HBYZMpQ",
    authDomain: "ripdb-91c17.firebaseapp.com",
    projectId: "ripdb-91c17",
    storageBucket: "ripdb-91c17.appspot.com",
    messagingSenderId: "1045345023311",
    appId: "1:1045345023311:web:373947cc3f88f72e1c813a",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Get a list of cities from your database
  async function getRatings(db) {
    const ratings = collection(db, "Ratings");
    let getRatings = await getDocs(ratings);
    return getRatings;
  }
  getRatings(db)
    .then((ratings) => {
      let parseRatings = ratings.docs.map((doc) => doc.data());
      return parseRatings;
    })
    .then((ratings) => {
      console.log(ratings);
    });
}
