import './navbar.css'
import prylogo from '../../prylogo.png'

const Navbar = () => {
  return (
      <div className="navbar">
          <div className="navBarItems">
              <img className="logo" src={prylogo} alt="Pry logo" />
              <a href="https://pry.co/financial-projections">Product</a>
              <a href="https://pry.co/pre-seed-stage-companies">Startups</a>
              <a href="https://pry.co/pricing">Pricing</a>
              <a href="https://pry.co/docs/introduction">Docs</a>
              <a href="https://pry.co/docs/introduction">Blog</a>
          </div>

          <div className="navBarbuttons">
              <a href="https://app.pry.co/login">
                  <button className='signinBtn'>Sign In</button>
              </a>
              <a href="https://app.pry.co/register">
                  <button className='signupBtn'>Sign Up For Free</button>
              </a>
              
          </div>

      </div>
  );
}


  export default Navbar
