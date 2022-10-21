import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";


function NewAnime({ user}) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [showR, setShowR] = useState(false)

  const [anime, setAnime] = useState("")
  const [search, setSearch] = useState("")
  const [animeData, setAnimeData] = useState([]);
  const [displayData, setDisplayData] = useState(false)


 

  const searchR = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=5`
    ).then((response) => response.json());
  };
function handleSearch(e){
    e.preventDefault();
    searchR(search).then((data) => {
      setAnimeData(data.data);
      // history.push('/');
    });
    setDisplayData(!displayData)
  }
  console.log(animeData)


  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  //add searched anime to watchedlist through new review
  function handleClick(a) {
    setAnime(a)
    setShowR(!showR)

  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    let newRev = {rating,
      comment,
      "anime_id": anime.id,
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
        // setReviews([...reviews, newRev])
        history.push("/");
        
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <form className="home__form">
            <FormField type="submit" className="home__formControl">
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
          {animeData.map((a)=><div className= "anime"> 
          <li><a href = {a.images.jpg.image_url}>{a.title} </a> <img src={a.images.jpg.image_url}/>
          <Button onClick = {handleClick}> Watched </Button>
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
              onChange={(e) => setRating(e.target.value)}
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

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewAnime;