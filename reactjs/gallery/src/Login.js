import React, {Component} from 'react';
import './App.css'

class Login extends Component{

  render(){
      return(
        <div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <form className="col-auto align-self-center p-5 bg-light rounded-lg border border-primary">
                <div className="text-center">
                  <img src="/assets/logo.png" width="110" height="110" alt="site_Logo" classNameName="logo" />
                  <h4>.online</h4>
                  <h6>Please sign-in</h6>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="float-right btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      )
  }
}

export default Login;