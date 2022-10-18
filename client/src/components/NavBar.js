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
      <BrowserRouter>

      <Logo>
        <Link to="/">Watched Animes</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Watched Anime
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
        <h4>Welcome <em>{user.username}</em></h4>
      </Nav>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Comic Sans";
  font-size: 3rem;
  color: lightpink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;