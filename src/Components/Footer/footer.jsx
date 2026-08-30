import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Resume Section */}
        <div className="footer-section">
          <h3>Resume</h3>
          <p>Download my resume for full details about education, skills, and work experiences.</p>
          <a href="/Resume 2026.pdf" download="Shreyas_Resume.pdf" className="download-btn">
            Download resume
          </a>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Reach out to me at</p>
          <a href="mailto:shreyasmg88@gmail.com" className="email-link">
            shreyasmg88@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>© 2026 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer