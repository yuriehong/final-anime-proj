import React,{useState} from "react";

function Review({myReview, user, anime, setReviews}) {
    const[showEdit, setShowEdit] = useState(false)
    const [rating, setRating] = useState(myReview.rating)
    const [comment, setComment] = useState(myReview.comment)

      //handling edit review form submission
    function handleEdit(e){
      e.preventDefault()
      //updating review
      fetch(`/reviews/${myReview.id}`, {
        method : "PATCH",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(
          {rating,
        comment,
        "user_id": user.id,
        "anime_id": anime.id
    }
        )
      })
      .then(res => res.json())
      .then(data => data)
      setShowEdit(!showEdit)
      // //resets reviews
      fetch(`/animes/${anime.id}`)
    .then(resp => resp.json())
    .then(data => setReviews(data.reviews))


    }
    //deleting review
    function handleClick(){
        fetch(`/reviews/${myReview.id}`, { method: "DELETE", })
        .then((r) => {
          if (r.ok) {
            fetch(`/animes/${anime.id}`)
    .then(resp => resp.json())
    .then(data => setReviews(data.reviews))
          
        } else {
            r.json().then((err) => alert(err.error));
          }})


            }

    function onEditClick(){
      setShowEdit(!showEdit)
    }
  
     
    
    return (
        <div>
          <h4>Rating: {myReview.rating} / 10</h4>
          <h4>Comment: </h4>
          <p>{myReview.comment}</p>
          <i>Created by: {user.username} </i>

          <button id = "button" onClick = {handleClick}>Delete Review</button> 
          <button id = "button" onClick = {onEditClick}>Edit Review</button> 
          {showEdit ? 
          <div className="form">
        <form onSubmit={handleEdit}>
          <h3>Edit Comment</h3>
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="text"
            name="name"
            placeholder="Anime Rating"
            id="description"
          />
                 
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="textarea"
            name="name"
            placeholder="Anime Comment"
            className="input-text"
          />
          <br />
          
          <input
            type="submit"
            name="submit"
            value="Submit edit"
            className="submit"
          />
        </form>
        </div> : <p></p>}


          </div> 
      );
}

export default Review