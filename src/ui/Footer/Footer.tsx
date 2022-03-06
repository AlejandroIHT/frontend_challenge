import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reacrt from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Created with <FontAwesomeIcon icon={faHeart} color="#FF452B" /> by{' '}
        <a
          href="https://www.linkedin.com/in/alejandroherrerat/"
          target="_blank"
        >
          Alejandro Herrera Turra
        </a>
      </p>
    </div>
  );
};

export default Footer;
