import {Link} from "react-router-dom";
import '../assets/css/header.css';

const Header = () => {
  return(
      <header>
          <div className="header">
              <div className="header__image">
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON" />
              </div>
              <h1 className="header__name">Jon SIMPSON</h1>
          </div>
          <nav>
              <ul>
                  <li><Link to={`home`}><span className="material-symbols-outlined">home</span><span
                      className="link">Accueil</span></Link>
                  </li>
                  <li><Link to={`experience`}><span className="material-symbols-outlined">person</span><span
                      className="link">Experience</span></Link>
                  </li>
                  <li><Link to={`portfolio`}><span className="material-symbols-outlined">image</span><span
                      className="link">Portfolio</span></Link>
                  </li>
                  <li><Link to={`contact`}><span className="material-symbols-outlined">alternate_email</span><span
                      className="link">Contact</span></Link>
                  </li>
              </ul>
          </nav>
      </header>
  )
}

export default Header;