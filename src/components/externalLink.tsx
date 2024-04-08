"use client";

import React, { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.open(href, "_blank");
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
