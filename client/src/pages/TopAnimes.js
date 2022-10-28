import { useState, useEffect } from "react";
import styled from "styled-components";
import Anime from "../components/Anime.js"

function TopAnimes({ user}) {
    const [topAnimes, setTopAnimes] = useState([]);

    useEffect(() => {
      fetch("/topAnimes")
        .then((r) => r.json())
        .then(data => setTopAnimes(data))
      }, []);

  console.log(topAnimes)


    return (
      <Wrapper>
        <h2> Top 3 Animes </h2>
        <div className = "cardList">
        {topAnimes.map((anime) => (
           <Anime user = {user} anime = {anime} />
        ))}
        </div>
          </Wrapper>
    )
}

const Wrapper = styled.section`
max-width: 1000px;
margin: 25px auto;
`;
   
            
  export default TopAnimes;

