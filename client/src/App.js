import Home from "./screens/Home/Home"
import AllShows from "./screens/AllShows/AllShows"
import CreateShow from "./screens/CreateShow/CreateShow"
import EditShow from "./screens/EditShow/EditShow"
import ShowDetail from "./screens/ShowDetail/ShowDetail"
import SignIn from "./screens/SignIn/SignIn"
import SignOut from "./screens/SignOut/SignOut"
import SignUp from "./screens/SignUp/SignUp"
import { Route, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <SignUp/>
        </Route> 
        <Route path="/sign-in">
          <SignIn/>
        </Route>
        <Route path="/sign-out">
          <SignOut/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/shows">
          <AllShows/>
        </Route>
        <Route exact path="/shows/:id">
          <ShowDetail/>
        </Route>
        <Route path="/create-show">
          <CreateShow/>
        </Route>
        <Route exact path="/shows/:id/edit">
          <EditShow/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
