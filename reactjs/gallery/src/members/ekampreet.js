import React, {Component} from 'react';
import './members.css'

class Ekampreet extends Component{

  render(){
      return(
        <div className="container-fluid">
          <div className="row my-1">
            <div className="col-2">
              <div className="nav flex-column nav-pills sticky-top" id="tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="catagory-tab" data-toggle="pill" href="#catagory" role="tab" aria-controls="home" aria-selected="true">Home</a>
                <a className="nav-link" id="catagory2-tab" data-toggle="pill" href="#catagory2" role="tab" aria-controls="catagory2" aria-selected="false">New Born</a>
              </div>
            </div>
            <div className="col-10">

              <div className="tab-content" id="tabContent">
                <div className="tab-pane fade show active" id="catagory" role="tabpanel" aria-labelledby="catagory-tab">
                  <div className="homePageImage">
                    <img src="./assets/ekampreet/homePageImg.jpg" alt="homePage_image" />
                  </div>
                </div>

                <div className="tab-pane fade" id="catagory2" role="tabpanel" aria-labelledby="catagory2-tab">

                    <div className="row justify-content-center mygallery">
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2009.jpg" data-lightbox="image-set">
                            <img className="rounded" src="./assets/ekampreet/IMG_2009.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2010.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2010.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2011.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2011.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2012.jpg" data-lightbox="image-set">
                            <img className="rounded" src="./assets/ekampreet/IMG_2012.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2013.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2013.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2014.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2014.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2021.jpg" data-lightbox="image-set">
                            <img className="rounded" src="./assets/ekampreet/IMG_2021.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2016.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2016.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2017.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2017.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2018.jpg" data-lightbox="image-set">
                            <img className="rounded" src="./assets/ekampreet/IMG_2018.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2019.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2019.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2020.jpg" data-lightbox="image-set">
                              <img className="rounded" src="./assets/ekampreet/IMG_2020.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div className="col-auto">
                          <a href="./assets/ekampreet/IMG_2021.jpg" data-lightbox="image-set">
                            <img className="rounded" src="./assets/ekampreet/IMG_2021.jpg" alt="filename"/>
                          </a>
                        </div>                        
                    </div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Ekampreet;