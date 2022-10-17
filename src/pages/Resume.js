import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   'References',
// ];

const Resume = () => (
  <Main
    title="Resume"
    description="Waleed Bin Khalid's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>

        </div>
      </header>

      <div style={{ height: '150vh' }}>
      <iframe className="holds-the-iframe" title="Hassan Resume" src="https://docs.google.com/gview?url=https://github.com/wbkch/wbkch/raw/mater/Waleed%20Resume.pdf&embedded=true" style={{ width: '100%', height: '100%' }} frameBorder="0" />
        
      </div>

    </article>
  </Main>
);

export default Resume;