import React, { useState } from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import loaction_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/linkedin.jpg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "2ce2aa5e-6a98-45b4-92b3-cd1ff652dfb1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success!");
      alert(data.message); // <-- Alert added here on success (Web3Forms message)
      event.target.reset(); // Clears form fields after submission
    } else {
      setResult("Error");
      alert(data.message || "Something went wrong!"); // <-- Alert added here on error
    }
  };

  return (
    <div className="contact" id="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Connect</h1>
                <p>I am currently available to start a new role or take on new projects. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>shreyasmg88@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                    <img src={linkedin_icon} alt="LinkedIn" />
                    <a href="http://www.linkedin.com/in/shreyas-m1998" target="_blank" rel="noopener noreferrer">
                    http://www.linkedin.com/in/shreyas-m1998
                    </a>
                    </div>

                    <div className="contact-detail">
                    <img src={loaction_icon} alt="" /><p>Bengaluru, India</p>
                    </div>

                    <div className="contact-detail">
                    <img src={call_icon} alt="" /><p>+91-9187165560</p>
                    </div>
                    
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label>Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name' required />
                <label>Your Email</label>
                <input type="email" placeholder='Enter your Email' name='email' required />
                <label>Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' required></textarea> 
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact