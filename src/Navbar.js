import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='nav-bar'>
        <p> 
          <span className="app-name"><b>Better</b>Reads</span> &emsp; 
          <Link to={'/'}><i className='icon fa-solid fa-house'></i></Link> &emsp; 
          <Link to={'/library'}><i className="icon fa-solid fa-book"></i></Link> &emsp;
          <Link to={'/profile'}><i className='icon fa-solid fa-user'></i></Link> &emsp; 
          <Link to={'/search'}><i className="icon fa-solid fa-magnifying-glass"></i></Link></p>
        <p>Hello, fellow bookworm!</p>
      </div>
    )
}

export default Navbar;