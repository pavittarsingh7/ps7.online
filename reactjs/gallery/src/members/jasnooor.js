import React, {Component} from 'react';
import './members.css'

class Jasnoor extends Component{

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
                    <img src="./assets/jasnoor/homePageImg.jpg" alt="homePage_image" />
                  </div>
                </div>

                <div className="tab-pane fade" id="catagory2" role="tabpanel" aria-labelledby="catagory2-tab">

                    <div className="row justify-content-center mygallery">

                    <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_1.jpg" data-lightbox="image-set">
                            <img class="rounded" src="./assets/jasnoor/jasnoorsingh_1.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_4.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_4.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_7.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_7.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_9.jpg" data-lightbox="image-set">
                            <img class="rounded" src="./assets/jasnoor/jasnoorsingh_9.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_10.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_10.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_7.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_7.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_8.jpg" data-lightbox="image-set">
                            <img class="rounded" src="./assets/jasnoor/jasnoorsingh_8.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_11.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_11.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_2.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_2.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_1.jpg" data-lightbox="image-set">
                            <img class="rounded" src="./assets/jasnoor/jasnoorsingh_1.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_4.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_4.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_7.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_7.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_9.jpg" data-lightbox="image-set">
                            <img class="rounded" src="./assets/jasnoor/jasnoorsingh_9.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_10.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_10.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_7.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_7.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_8.jpg" data-lightbox="image-set">
                            <img class="rounded" src="./assets/jasnoor/jasnoorsingh_8.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_11.jpg" data-lightbox="image-set">
                              <img class="rounded" src="./assets/jasnoor/jasnoorsingh_11.jpg" alt="filename"/>
                          </a>
                        </div>
                        <div class="col-auto">
                          <a href="./assets/jasnoor/jasnoorsingh_2.jpg" data-lightbox="image-set">
                              <img src="./assets/jasnoor/jasnoorsingh_2.jpg" alt="filename"/>
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

export default Jasnoor;