import React from 'react'
// import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        
        </Route>
      </Switch>
      </Router>


    </div>
  )
}
