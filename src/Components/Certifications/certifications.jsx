import React from 'react'
import './certifications.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Certifications = () => {
  // Certification data array - replace the '#' placeholder links with your actual certificate URLs
  const certData = [
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      link: "https://www.credly.com/badges/39b102ad-99eb-42ef-bd84-377f55f8f0f3/public_url"
    },
    {
      title: "Ultimate DevOps Project Implementation",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-11661e17-7744-4b93-ba28-bcff1a715bcc/"
    },
    {
      title: "Unity Essentials Certificate",
      issuer: "Unity",
      link: "https://www.credly.com/badges/94209439-a98c-4bed-bb6e-b818b74c1fe2/linked_in?t=tayjsi"
    }
  ];

  return (
    <div className="certifications"  id="certifications">
      <div className="certifications-title">
        <h1>Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="certifications-container">
        {certData.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
            <span className="cert-link-icon">View Certificate &rarr;</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Certifications