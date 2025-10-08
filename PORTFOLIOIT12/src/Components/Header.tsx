import React from "react";

interface HeaderProps {
  name: string;
  tagline: string;
}

const Header: React.FC<HeaderProps> = ({ name, tagline }) => {
  return (
    <header>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </header>
  );
};

export default Header;
