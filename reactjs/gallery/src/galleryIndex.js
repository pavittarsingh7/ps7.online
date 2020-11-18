import React, {Component} from 'react';
import './galleryIndex.css'
import { Link } from "react-router-dom";
class galleryIndex extends Component{

  render(){
      return(
        
        <div>
          <div className="container my-3">
            <div className="row justify-content-center text-center text-white">

              <div className="col mb-3 gphoto">
                <div className="member">
                <Link to="/Ekampreet">
                  <a href="/Ekampreet" className="text-white">
                    <img src="./assets/thumbnails/ekampreet.jpg" className="img-thumbnail rounded-circle" alt="..." />
                      <div className="member-info">
                        <div className="member-name">
                          <h4>Ekampreet Kaur</h4>
                        </div>
                      </div>
                  </a>
                </Link>
                  
                </div>
              </div>

              <div className="col mb-3 gphoto">
                <div className="member">
                  <a href="/" className="text-white">
                    <img src="./assets/thumbnails/portrait.jpg" className="img-thumbnail rounded-circle" alt="..." />
                      <div className="member-info">
                        <div className="member-name">
                          <h4>Pavittar Singh</h4>
                        </div>
                      </div>
                  </a>
                </div>
              </div>

              <div className="col mb-3 text-center gphoto">
                <div className="member">
                <Link to="/Jasnoor">
                  <a href="/Jasnoor" className="text-white">
                    <img src="./assets/thumbnails/jasnoorsingh.jpg" className="img-thumbnail rounded-circle" alt="..." />
                      <div className="member-info">
                        <div className="member-name">
                          <h4>Jasnoor Singh</h4>
                        </div>
                      </div>
                  </a>
                </Link>
                </div>
              </div>          

            </div>
          </div>
        </div>
        
      )
  }
}

export default galleryIndex;