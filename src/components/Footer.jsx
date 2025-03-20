import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>e-Shop</h3>
          <p>
            Your best hope to all your needs.Shop with us and experience the best online shopping experience
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/shop'>Shop</Link>
            </li>
            <li>
            <Link>Contact</Link>
            </li>
            <li>
            <Link>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div>
            <a href=""><FaFacebook/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaGithub/></a>
            <a href=""><FaLinkedin/></a>
          </div>
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer