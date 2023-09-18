import React from "react";
import nkownyourself from '../Assets/nkownyourself.png';
import learning from '../Assets/learning.jpeg';
import process from '../Assets/process.png';
import jobsearch from '../Assets/jobsearch.png';
import '../Style/cta.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Explore Our Images</h2>
        <img src={nkownyourself} className="images" alt="" 
        />
        <img src={learning} className="images" alt="" 
        />
        <img src={process} className="images" alt="" 
        />
        <img src={jobsearch} className="images" alt="" 
        />
        <p>
          learning never end in life, for as long you still 
          bresthing the will be always something new coming.
        </p>
      </div>
    </section>
  );
};

export default CTA;
