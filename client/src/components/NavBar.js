import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
      else{
        console.log("Unable to logout")
      }
    });
    
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">My Animes</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          Add Anime
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
        <p>Welcome {user.username}</p>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  font-family: Chango;
  width: 100%;
  height: 80px;
  background-color: #41403d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  color: white;
   z-index: 10;
`;

const Logo = styled.h1`
  font-family: "Chango";
  font-size: 2rem;
  color: lightpink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
font-family: "Chango";

  display: flex;
  gap: 4px;
 position: absolute;
    right: 8px;
`;

export default NavBar;
