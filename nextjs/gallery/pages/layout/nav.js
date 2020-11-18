import Link from 'next/link'

function Nav(){
    return <div>
      <div class="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow rounded">
        <a className="navbar-brand" href="https://www.ps7.online/" target="_blank">
          <img src="../assets/logo.png" width="30" height="30" alt="site_logo" loading="lazy" />.online
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link href="/galleryIndex"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
            <Link href="/members/ekampreet"><a className="nav-link">Ekampreet</a></Link>
              </li>
              <li className="nav-item">
              <Link href="/members/jasnoor"><a className="nav-link">Jasnoor</a></Link>
              </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <button className="btn btn-outline-danger my-2 my-sm-0 ml-2 float-right" type="submit">Logout</button>
        </form>
        </nav>
      </div>
    </div>
}

export default Nav;