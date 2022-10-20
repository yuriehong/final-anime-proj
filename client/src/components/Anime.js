import {useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box,Button, FormField, Input, Label, Textarea } from "../styles";
import Review from "./Review.js"
// import NewComment from "./NewComment.js"

function Anime({user, anime, onRemoveAnime}) {
    const [showReviews, setShowReviews] = useState(false)
    const [reviews, setReviews] = useState([])
    const [showForm, setShowForm] = useState(false)



const [errors, setErrors] = useState([]);

//Show reviews for the anime when show review button is clicked
// function handleReviews() {
//     if(showReviews == false){
//     fetch(`/animes/${anime.id}`)
//     .then(resp => resp.json())
//     .then(data => setReviews(data.reviews))

//     }
//     else{
//       console.log("changing to none")
//       setReviews([])
      
//     }
//     setShowReviews(!showReviews)
// }

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
 

return (
    <Rec key={anime.id}>
    <Box>
      <Button onClick ={() => handleDelete()}>Delete</Button>
      {/* <Button variant="outline" onClick = {() => setShowEdit(!showEdit)}>Edit </Button> */}
      
      <h2>{anime.title}</h2>
      <img  src ={anime.image} width="400" height="400" alt = {anime.title}/>
      <p>
      <b>Year: {anime.year}</b>
      <br></br>
        <b>Genre: {anime.genre}</b>
        &nbsp;·&nbsp;
        <br></br>
        <cite>Created By: {user.username}</cite>
      </p>
      <p><b>Summary</b>: {anime.summary}</p>
      {/* <Button onClick= {handleReviews}>{showReviews ? "Hide Reviews": "Show Reviews"}</Button> */}
    
      {/* <div >
        <ul > {reviews.map(review => <Review myReview={review} user ={user} anime = {anime} setReviews= {setReviews} reviews = {reviews} key ={review.id} />)} </ul>
      </div> */}
      {/* {!showReviews ? 
      <Button id="newR" onClick = {handleNew}>New Review</Button> : <p></p>}
      {showForm ? <NewReview user = {user} anime = {anime} reviews = {reviews} setReviews = {setReviews}/> : ""} 
       */}

    </Box>
  </Rec>


)

}
const Rec= styled.article`
  margin-bottom: 24px;
`;
export default Anime