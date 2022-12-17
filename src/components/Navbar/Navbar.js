import './navbar.css'
import prylogo from '../../prylogo.png'

const Navbar = ()=> {
    return (
      <div className="navbar">
        <div className="navBarItems">
        <img className="logo "src={prylogo} alt="Pry logo" />
        <a href="#">Product</a>
        <a href="#">Startups</a>
        <a href="https://pry.co/pricing">Pricing</a>
        <a href="https://pry.co/docs/introduction">Docs</a>
        <a href="https://pry.co/docs/introduction">Blog</a>
        </div>

        <div className="navBarbuttons">
        <button className='signinBtn'>Sign In</button>
        <button className='signupBtn'>Sign Up For Free</button>
        </div>

      </div>
    );
  }

  export default Navbar
