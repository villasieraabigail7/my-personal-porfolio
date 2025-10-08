import React from "react";
interface AboutMeProps {
  name: string;
  bio: string;
  profileImage: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ name, bio, profileImage }) => {
  return (
    <section id="about">
      <img src= 'images/pro.jpg' alt={profileImage} />
      <div>
        <h2>Hi, I'm {name}</h2>
        <p>{bio}</p>
      </div>
    </section>
  );
};

export default AboutMe;
