import {useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box,Button, FormField, Input, Label, Textarea } from "../styles";
import Review from "./Review.js"
// import NewComment from "./NewComment.js"

function Anime({user, anime, onRemoveAnime}) {
    const [showReviews, setShowReviews] = useState(false)
    const [showSummary, setShowSummary] = useState(false)

    const [reviews, setReviews] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [avgRating, setAvgRating] = useState(0)



const [errors, setErrors] = useState([]);

//gets avg rating
useEffect(() =>{
fetch(`/avg/${anime.id}`)
.then(resp => resp.json())
.then(data => setAvgRating(data))}, [reviews]
)

//Show reviews for the anime when show review button is clicked
function handleReviews() {
    if(showReviews == false){
    fetch(`/animes/${anime.id}`)
    .then(resp => resp.json())
    .then(data => setReviews(data.reviews))

    }
    else{
      console.log("changing to none")
      setReviews([])
      
    }
    setShowReviews(!showReviews)
}

 //delete anime from watched list
 function handleDelete() {
    fetch(`/animes/${anime.id}`, { method: "DELETE", })
    .then((r) => {
      if (r.ok) {
        onRemoveAnime(anime);
      } else {
        r.json().then((err) => alert(err.error));
      }})
      
    }
 
function showSum(){
  setShowSummary(!showSummary)
}
return (
    <div className= "card" key={anime.id}>
    <Box>
     
      <h2 className = "font-link">{anime.title}</h2>
      <img  src ={anime.image} width="400" height="400" alt = {anime.title}/>
      <p>
      <b>Year: {anime.year}</b>
      <br></br>
        <b>Genre: {anime.genre}</b> 
        &nbsp;·&nbsp;
        <br></br>
        <b>Average Rating: {avgRating}</b>
      <br></br>
      </p>
      <Button onClick= {showSum}>{showSummary ? "Hide Summary": "Show Summary"}</Button> 
      {showSummary? 
      <p id= "summary"><b>Summary</b>: {anime.summary}</p>: <p></p>

}
      <Button onClick= {handleReviews}>{showReviews ? "Hide Reviews": "Show Reviews"}</Button> 
    
      <div >
        <ul > {reviews.map(review => <Review myReview={review} user ={user} anime = {anime} onRemoveAnime = {onRemoveAnime} setReviews= {setReviews} reviews = {reviews} key ={review.id} />)} </ul>
      </div> 
    </Box>
  </div>


)

}
export default Anime