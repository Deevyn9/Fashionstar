import Logo from "../../assets/Fashionistar.svg";
import FB from "../../assets/facebook.svg";
import YT from "../../assets/youtube.svg";
import IG from "../../assets/instagram.svg";
import TT from "../../assets/twitter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <div className="footer__logo">
          <img src={Logo} alt="fashionstar logo" />
        </div>
        <p>
          We are available for any inquiries you might have. Feel free to reach
          out on any of our platforms
        </p>
        <div className="footer__socials">
          <h3>Follow us on:</h3>
          <img src={FB} alt="facebook" />
          <img src={YT} alt="youtube" />
          <img src={IG} alt="instagram" />
          <img src={TT} alt="twitter" />
        </div>
      </div>
      <div className="footer__links">
        <h3>Useful Links</h3>
        <ul>
          <li>What we do</li>
          <li>Our Project</li>
          <li>FAQ</li>
          <li>News and Articles</li>
          <li>Support team</li>
          <li>Events</li>
        </ul>
      </div>
      <div className="footer__pages">
        <h3>Pages</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Categories</li>
          <li>Contact Us</li>
          <li>Support team</li>
          <li>Events</li>
        </ul>
      </div>
      <div className="footer__contacts">
        <h3>Contact Us</h3>
        <ul>
          <li>(+34) 58 2453 9748</li>
          <li>Council@gmail.com</li>
          <li>Lighthouse No.22, LA</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
