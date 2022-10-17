import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';

// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Waleed Bin Khalid via email @ waleedbinkhalidch@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can contact me at: </p>
        {/* <EmailLink /> */}
        <a href="tel:+923058995952" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faPhone} /> (+92) 305 8995952
        </a>
        <br />
        <a href="mailto:waleedbinkhalidch@gmail.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} /> waleedbinkhalidch@gmail.com
        </a>
        <br />
        <a href=" http://maps.google.com/?q=Lahore, Pakistan" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Lahore, Pakistan
        </a>
      </div>
      Or check me at
      <br />
      <br />
      <ul className="actions">
        <li>
          <a href="https://www.linkedin.com/in/waleed-bin-khalid-wbkch/" rel="noreferrer" target="_blank" className="button"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/wbkch" rel="noreferrer" target="_blank" className="button"><FontAwesomeIcon icon={faGithub} /> Github</a>
        </li>
        {/* <li>
          <a href="mailto:hassanmunir.me@gmail.com"
          rel="noreferrer" target="_blank"
          className="button"><FontAwesomeIcon icon={faEnvelope} /> eMail</a>
        </li> */}
      </ul>
      {/* <ContactIcons /> */}
    </article>
  </Main>
);

export default Contact;