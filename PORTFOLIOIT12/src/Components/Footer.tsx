import React from "react";

interface FooterProps {
  author: string;
}

const Footer: React.FC<FooterProps> = ({ author }) => {
  return <footer>© {new Date().getFullYear()} {author}. All rights reserved.</footer>;
};

export default Footer;
