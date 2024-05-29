import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link to="services" spy={true} smooth={true}
                          duration={1000}> Services </Link>
                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true}
                          duration={1000}>About Us </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">14662008CanadaInc@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">Copyright: ©2024 14662008 Canada Inc. </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side3">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Attributions</p>
                <ul>
                  <li>
                    <a href="https://www.vecteezy.com/free-videos/background">Background
                      Stock Videos by Vecteezy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}

export default Footer;
