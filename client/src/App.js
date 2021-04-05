import Home from "./screens/Home/Home"
import AllShows from "./screens/AllShows/AllShows"
import CreateShow from "./screens/CreateShow/CreateShow"
import EditShow from "./screens/EditShow/EditShow"
import ShowDetail from "./screens/ShowDetail/ShowDetail"
import SignIn from "./screens/SignIn/SignIn"
import SignOut from "./screens/SignOut/SignOut"
import SignUp from "./screens/SignUp/SignUp"
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {   //this useeffect allows the user to persist even after a page reload
    const fetchUser = async () => {
      const user = await verifyUser()   //this checks if there is a user by chacking the localstorage
      user ? setUser(user) : setUser(null)    //then sets user according based on the response we recieve, true or false
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">
          <SignUp setUser={setUser}/>
        </Route> 
        <Route path="/sign-in">
          <SignIn setUser={setUser}/>
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser}/>
        </Route>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route exact path="/shows">
          <AllShows user={user}/>
        </Route>
        <Route exact path="/shows/:id">
          <ShowDetail user={user}/>
        </Route>
        <Route path="/create-show">
        {user ? <CreateShow user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/shows/:id/edit">
        {user ? <EditShow user={user} /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
