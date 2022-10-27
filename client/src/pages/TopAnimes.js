import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";

function TopAnimes({ user}) {

    const [topAnimes, setTopAnimes] = []

    return (
        <div className = "cardList">
        {animesToDisplay.map((anime) => (
           <Anime key = {anime.id} />
        ))}
        </div>
          
    )
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
            
    export default TopAnimes;

