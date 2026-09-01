import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg'
import './shreyas.css';

const Shreyas = () => {

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="shreyas" id="shreyas">
      <h1>
        <span>I am Shreyas Manjunath,</span> Software Engineer based in India.
      </h1>

      <p>Problem solver. Lifelong learner.</p>

      <div className="shreyas-action">
        <div className="shreyas-connect" onClick={scrollToContact}>
          Connect with me
        </div>
      </div>
    </div>
  );
};

export default Shreyas;