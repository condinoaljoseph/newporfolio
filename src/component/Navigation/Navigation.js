import React from 'react';
import Resume from './resume.pdf';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a
            href='https://github.com/condinoaljoseph'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/aljosephcondino/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href={Resume} download>
            Resume <span class='lnr lnr-download'></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
