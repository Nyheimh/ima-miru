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
        <Route>
          <SignUp/>
        </Route>
        <Route>
          <SignIn/>
        </Route>
        <Route>
          <SignOut/>
        </Route>
        <Route>
          <Home/>
        </Route>
        <Route>
          <AllShows/>
        </Route>
        <Route>
          <ShowDetail/>
        </Route>
        <Route>
          <CreateShow/>
        </Route>
        <Route>
          <EditShow/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
