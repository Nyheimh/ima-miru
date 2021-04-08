import Home from "./screens/Home/Home";
import AllShows from "./screens/AllShows/AllShows";
import CreateShow from "./screens/CreateShow/CreateShow";
import EditShow from "./screens/EditShow/EditShow";
import ShowDetail from "./screens/ShowDetail/ShowDetail";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import Watchlist from "./screens/Watchlist/Watchlist";

import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);
  const [watchlistShows, setWatchlistShows] = useState([]);

  useEffect(() => {
    //this useeffect allows the user to persist even after a page reload
    const fetchUser = async () => {
      const user = await verifyUser(); //this checks if there is a user by chacking the localstorage
      console.log(user);
      setUser(user);
      // user ? setUser(user) : setUser(null)    //then sets user according based on the response we recieve, true or false
    };
    fetchUser();
  }, []);

  const clearUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/shows">
          <AllShows user={user} />
        </Route>
        <Route exact path="/shows/:id">
          {/* {user ? <ShowDetail user={user} /> : <ShowDetail user={user} />} */}
          <ShowDetail user={user} watchlistShows={watchlistShows}/>
        </Route>
        <Route path="/create-show">
          {user ? <CreateShow user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/shows/:id/edit">
          {user ? <EditShow user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/watchlist">
          {user ? <Watchlist user={user} watchlistShows={watchlistShows} setWatchlistShows={setWatchlistShows}/> : <Redirect to="/"/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
