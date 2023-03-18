import { Link } from "react-router-dom";

function Banner() {
    return (
      <div className="banner">
        <p className="welcome">Welcome to BetterReads!</p>
        <p>"It's like goodreads," she said. "But <i>better</i>".</p>
        <i className="dingbat fa-solid fa-book-open-reader"></i>
        <p>Not sure where to go?</p>
        <Link to={'/library'}><button className='banner-button'>Go to your library</button></Link>
        <Link to={'/profile'}><button className='banner-button'>See your profile</button></Link>
        <Link to={'/search'}><button className='banner-button'>Look for new books</button></Link>
      </div>
    )
}

export default Banner;