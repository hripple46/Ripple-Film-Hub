import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
  getDoc,
  doc,
} from "firebase/firestore";

export default function Firebase(props) {
  let [rating, setRating] = useState();
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

  // Return a list of all ratings from the database

  async function getRatings(db) {
    // Get a reference to the Ratings collection
    let ratingRef = doc(db, "Ratings", props.title);
    // Get the ratings from the collection
    let ratings = await getDoc(ratingRef);
    // Return the ratings
    return ratings;
  }
  let obtainRating = () => {
    // Get the ratings from the database
    getRatings(db)
      .then((ratings) => {
        // Get the ratings data
        return ratings.data();
      })
      .then((data) => {
        // Get the rating
        return data.rating;
      })
      .then((rating) => {
        // Set the rating
        setRating(rating);
      });
  };
  obtainRating();

  // This code creates a div with a key that is the value of props.title
  // The div is then returned with the value of rating inside of it

  // The props.title value is a string and is used as the key for the div
  // The rating value is the result of the getRating() function

  return <div key={props.title}>{rating}</div>;
}
