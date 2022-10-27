import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";


function NewAnime({ user}) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [showR, setShowR] = useState(false)

  const [anime, setAnime] = useState("")
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState("")
  const [animeData, setAnimeData] = useState([]);
  const [displayData, setDisplayData] = useState(false)

  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();


  //search call
  const getSearch=async()=>{
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=5`)
    const resData= await res.json();
    setAnimeData(resData.data)
}
useEffect(() => {
  fetch("/animes")
    .then((r) => r.json())
    .then(setAnimes);
}, []);


  
function handleSearch(e){
    e.preventDefault();
    getSearch();
    setDisplayData(!displayData)
    
  }
  console.log(animeData)


  //add searched anime to watchedlist through new review
  function handleClick(a) {
    setAnime(a)
    setShowR(!showR)
    console.log(a)
  }

  function postReview(data){
    let newRev = {
      "rating": parseInt(rating),
      "comment": comment,
      "anime_id": data.id,
      "user_id": user.id   }

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRev),
    }).then((r) => {

      setIsLoading(false);
      if (r.ok) {
        console.log("review posted")             
      } else {
        r.json().then((err) => setErrors(err.error))
      }
    })
    .catch(error => {
      console.log(error)
    })
    history.push("/");

  }

  //submit new review, add new anime to watched list
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    console.log(animes)
    let i = animes.findIndex((a) => {return a.id == anime.mal_id})
    console.log(i)
    let newAni = {
        "id": anime.mal_id,
        "title": anime.title,
        "image": anime.images.jpg.image_url,
        "year": anime.year,
        "genre": anime.genres[0].name,
        "summary": anime.synopsis
      }
    
      console.log(newAni)
      if (i<0){
      fetch("/animes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAni),
      })
      .then(r => r.json())
      .then(data => {
        setAnimes([...animes, newAni])
        postReview(data)
      });
    }
    else{
      setErrors([...errors, "Already in anime list"])
    }

  }

  return (
    <Wrapper>
      <WrapperChild>
        <form id="search">
            <FormField type="submit" >
              <Input
                placeholder="Search for your favorite anime..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <button
                variant="contained"
                type="submit"
                disabled={!search}
                onClick={handleSearch}
              > Search </button>
              </FormField>
              </form>

        {displayData ? 
        <div>
          <h1>Results: </h1>
          {animeData.map((a)=><div key = {a.mal_id} className= "anime"> <img  width="50" height="55" src={a.images.jpg.image_url}/>
          <li><a href = {a.url}>{a.title} </a> 
          <But id = "watched" onClick = {() => handleClick(a)}> Add to list </But>
          </li></div>)

         } </div>
         : <p></p>}  

         {showR ?
        <form onSubmit={handleSubmit}>
          <FormField>
            <h1>New Review</h1>
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="integer"
              id="name"
              value={rating}
              onChange={(e) => setRating((e.target.value))}
            />
          </FormField>
          <FormField>
            <Label htmlFor="comment">Comment</Label>
            <Input
              type="text"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FormField>
       
          <FormField>
            <button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Review"}
            </button>
          </FormField>
          <FormField>             
      {errors? <div>{errors}</div>:null}
          </FormField>
        </form>
        : <p></p>
         }
      </WrapperChild>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
    
`;
//"Watched" button styling
const But = styled.button`
  background-color: lightblue;
  border-radius: 4px  
  float: right;


`;


const WrapperChild = styled.div`
  flex: 1;
`;

export default NewAnime;