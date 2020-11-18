import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import './App.css'
import logo from './logo.png';
import Ekampreet from './members/ekampreet'
import Jasnoor from './members/jasnooor'
import Home from './galleryIndex'

class App extends Component{

  render(){
      return(
        <div className="bg">
          <Router>
            <div className="container-fluid">

              <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-right border-left shadow rounded">
                  <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" alt="site_logo" loading="lazy" />.online
                  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to="/"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Ekampreet"><a className="nav-link" href="/Ekampreet">Ekampreet Kaur</a></Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/Jasnoor"><a className="nav-link" href="/Jasnoor">Jasnoor Singh</a></Link>
                      </li>
                  </ul>
                </div>
                <button className="btn btn-outline-danger my-2 my-sm-0 ml-2 float-right" type="submit">Logout</button>
              </nav>
            </div>
            <div>

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/Ekampreet">
                  <Ekampreet />
                </Route>
                <Route path="/Jasnoor">
                  <Jasnoor />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </Router>
          
        </div>
      )
  }
}

function NoMatch() {
  let location = useLocation();

  return (
    <div className="container mt-5 text-center bg-dark text-white">
      <h3 className="p-5">
        OOPS! <mark className="bg-danger rounded border-white border">404</mark> can't Found <strong><code>{location.pathname}</code></strong>
        <hr />
        <Link to="/">
        <button className="btn btn-outline-light">Home</button>
        </Link>
      </h3>
    </div>
  );
}

export default App;