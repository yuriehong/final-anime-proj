import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import AnimeList from "../components/AnimeList";
import NewAnime from "../pages/NewAnime";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewAnime user={user} />
          </Route>
          <Route path="/">
            <AnimeList user ={user} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
