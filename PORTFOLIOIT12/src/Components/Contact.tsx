import React from "react";

interface ContactProps {
  email: string;
  github: string;
  linkedin: string;
}

const Contact: React.FC<ContactProps> = ({ email, github, linkedin }) => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-links">
    
    
        <a href={`mailto:${email}`}>Email</a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
