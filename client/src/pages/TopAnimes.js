import { useState, useEffect } from "react";
import styled from "styled-components";
import Anime from "../components/Anime.js"

function TopAnimes({ user}) {
    const [topAnimes, setTopAnimes] = useState([]);
    const [topNum, setTopNum] = useState(1);


    useEffect(() => {
      fetch("/topAnimes")
        .then((r) => r.json())
        .then(data => {
          setTopAnimes(data)
        
        })
      }, []);

  // function handleSelect(val){
  //     setTopNum(val)
  //     console.log(topNum)
  //       if (topNum === "10") {
  //         setAnimesToShow(topAnimes.slice(0,10))
  //       }
  //       else  {
  //         setAnimesToShow(topAnimes.slice(0,5))
  //       }
    
  //     };

  let animesToShow = topAnimes.slice(0,5)
    return (
      <Wrapper>
        <h1> Top 5 Animes </h1>
        {/* <select id="selectform" value={topNum} onChange={(e) => {handleSelect(e.target.value)}}>
            <option value="5">Top 5 Animes</option>
            <option value="10">Top 10 Anime</option>
          </select> */}
        <div className = "cardList">
        {animesToShow.map((anime) => (
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

