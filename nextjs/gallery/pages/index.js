import Link from 'next/link'
import Head from 'next/head'

function HomePage() {
    return <div>
            <Head>
              <title>ps.online | Gallery</title>
              <link rel="icon" href="/assets/logo.png" />
            </Head>
            
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
                  <button type="submit" className="float-right btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
                <div className="text-center">
                <Link href="/"><a>Home</a></Link>
                <br />
                <Link href="/galleryIndex"><a>Gallery</a></Link>
                <br />
                <Link href="/members/ekampreet"><a>Ekampreet</a></Link>
                <br />
                <Link href="/members/jasnoor"><a>Jasnoor</a></Link>
                </div>
            </div>
            
  }
  
  export default HomePage