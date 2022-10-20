import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import Anime from "./Anime.js"

function AnimeList({user}) {
  const [animes, setAnimes] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [category, setCategory] = useState("All")

//removes anime for the frontend
function onRemoveAnime(anime) {
    setAnimes(animes.filter((a) => a.id !== anime.id))
  }

//refreshes the animes
function onUpdateAnime(){
  fetch("/animes")
      .then((r) => r.json())
      .then(setAnimes);
  }

//get animes
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  useEffect(() => {
    fetch("/animes")
      .then((r) => r.json())
      .then(setAnimes);
  }, []);

  //filter by genre
  // let animesToDisplay = animes.filter(item => {
  //   if (category === "All") {
  //     return true
  //   }
  //   else {
  //     return (item.category === category)
  //   }
  // });

  return (
    <Wrapper>
      {/* <select id="selectform" value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="All">Filter By Category</option>

          </select> */}
      {animes.length > 0 ? (
        animes.map((anime, i) => (
         <Anime key = {i} user={user} anime ={anime} onRemoveAnime = {onRemoveAnime} />
        ))
      ) : (
        <>
          <h2>No Animes Found</h2>
          <Button as={Link} to="/new">
            Add a new Anime
          </Button>
        </>
      )}
    </Wrapper>
  )
      }
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;


      
export default AnimeList;
