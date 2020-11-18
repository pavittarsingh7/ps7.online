import Head from 'next/head'
import Nav from './layout/nav'

function HomePage() {
    return <div>
        <Head>
          <title>ps.online | Gallery</title>
          <link rel="icon" href="/assets/logo.png" />
        </Head>

      <Nav />
      <style jsx>{`
      
      `}
      </style>
      <div class="container my-3">
        <div class="row justify-content-center text-center text-white">

          <div class="col mb-3 gphoto">
            <div class="member">
              <a href="./ekampreet.html" class="text-white">
                <img src="./assets/thumbnails/ekampreet.jpg" class="img-thumbnail rounded-circle" alt="..." />
                  <div class="member-info">
                    <div class="member-name">
                      <h4>Ekampreet Kaur</h4>
                    </div>
                  </div>
              </a>
            </div>
          </div>

          <div class="col mb-3 gphoto">
            <div class="member">
              <a href="#" class="text-white">
                <img src="./assets/thumbnails/portrait.jpg" class="img-thumbnail rounded-circle" alt="..." />
                  <div class="member-info">
                    <div class="member-name">
                      <h4>Pavittar Singh</h4>
                    </div>
                  </div>
              </a>
            </div>
          </div>

          <div class="col mb-3 text-center gphoto">
            <div class="member">
              <a href="./jasnoor.html" class="text-white">
                <img src="./assets/thumbnails/jasnoorsingh.jpg" class="img-thumbnail rounded-circle" alt="..." />
                  <div class="member-info">
                    <div class="member-name">
                      <h4>Jasnoor Singh</h4>
                    </div>
                  </div>
              </a>
            </div>
          </div>          

        </div>
      </div>
                
            </div>
            
  }
  
  export default HomePage