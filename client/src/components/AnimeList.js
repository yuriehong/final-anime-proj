import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import Anime from "./Anime.js"

function AnimeList({user}) {
  const [animes, setAnimes] = useState([]);
  const [reviews, setReviews] = useState([]);
  // const [avgRatings, setAvgRatings] = useState(0)
  const [category, setCategory] = useState("All")

  //filter by genre
  let animesToDisplay = animes.filter(item => {
    if (category === "All") {
      return true
    }
    else {
      return (item.genre === category)
    }
  });
//removes anime for the frontend
function onRemoveAnime(anime) {
    setAnimes(animes.filter((a) => a.id !== anime.id))
    fetch("/animes")
      .then((r) => r.json())
      .then(setAnimes);
  }



  useEffect(() => {
    fetch("/animes")
      .then((r) => r.json())
      .then(setAnimes);
  }, []);

  

  return (
    <Wrapper>
      <select id="selectform" value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="All">Filter By Category</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Adventure">Adventure</option>
            <option value="Shonen">Shonen</option>
            <option value="Drama">Shonen</option>



          </select>
                  
          <div className = "cardList">
      {animes.length > 0 ? (
        animesToDisplay.map((anime) => (
         <Anime key = {anime.id} user={user} anime ={anime} onRemoveAnime = {onRemoveAnime} />
        ))
      ) : (
        <>
          <h2>No Animes Found</h2>
          <Button as={Link} to="/new">
            Add a new Anime
          </Button>
        </>
      )}
      </div>
    </Wrapper>
  )
      }
const Wrapper = styled.section`
  max-width: 1000px;
  margin: 25px auto;
`;


      
export default AnimeList;
