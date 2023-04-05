import React, { useState, useEffect } from "react";
import star_white from "./assets/star_white.jpg";
import Icon from "./Icon";
import Firebase from "./Firebase";
import "./Rating.css";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  collectionGroup,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export default function Rating(props) {
  let [highlighted, setHighlighted] = useState(-1);
  let [movieRated, setMovieRated] = useState();
  let showStars = (e) => {
    let movieId = e.currentTarget.id;
    let movieString = movieId.substring(0, movieId.length - 7); //this is the id of the movie
    console.log(movieString);
    setMovieRated(movieString);
    let fiveStars = document.querySelector(".mainFiveStars");
    let flexStars = document.querySelector(".flexStars");
    let title = document.querySelector(".rateMovieTitle");
    title.innerHTML = props.title; //setting the title of the movie to be rated

    fiveStars.style.display = "flex"; //displaying the five stars for rating
    flexStars.style.display = "flex"; //displaying the five stars for rating
    fiveStars.addEventListener("click", () => {
      fiveStars.style.display = "none"; //hiding the five stars after a rating is submitted
      setHighlighted(-1);
    });
  };

  let highlightStars = () => {
    let stars = document.querySelector(".mainFiveStars");
    let star = stars.getElementsByTagName("svg");
    for (let i = 0; i < star.length; i++) {
      star[i].addEventListener("mouseover", () => {
        //when the mouse is over a star, change the color of the star to yellow
        setHighlighted(i); //setting the state to the star that is being hovered over
      });
    }
  };
  highlightStars();

  if (highlighted >= -1) {
    //checking if state has been changed, if so, change the color of the stars
    let stars = document.querySelector(".mainFiveStars");
    let star = stars.getElementsByTagName("svg");
    for (let i = 0; i < star.length; i++) {
      if (i <= highlighted) {
        //if the star is less than or equal to the highlighted star, change the color to yellow
        star[i].style.fill = "yellow";
      } else {
        star[i].style.fill = "white";
      }
    }
  }
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
  function submitRating() {
    let stars = document.querySelector(".mainFiveStars");
    let star = stars.getElementsByTagName("svg");
    for (let i = 0; i < star.length; i++) {
      star[i].addEventListener("click", () => {
        appendRating(i);
      });
    }
  }
  submitRating();
  async function appendRating(value) {
    const docRef = doc(db, "Ratings", movieRated);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      let currentRatings = docSnapshot.data().rating;
      let newRatings = [...currentRatings, value + 1];
      await updateDoc(docRef, { rating: newRatings });
    } else {
      await setDoc(docRef, { rating: [value + 1] });
    }
  }

  return (
    <div key={props.key} className="oneStar" id={props.id} onClick={showStars}>
      <Icon />
    </div> // This is the id of the movie + "oneStar" so that when a rating is submitted, it is submitted to the correct movie
  );
}
