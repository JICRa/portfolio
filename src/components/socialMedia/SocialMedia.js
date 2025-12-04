import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 2.8rem; /* circle size */
  height: 2.8rem;
  border-radius: 50%;

  background-color: ${(props) => props.backgroundColor};
  margin: 0 6px 10px 6px;

  & svg {
    width: 1.4rem; /* icon size INSIDE circle */
    height: 1.4rem;
    color: white;
  }

  &:hover {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => (
        <a
          key={i}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper {...media} {...props}>
            <Icon icon={media.fontAwesomeIcon} />
          </IconWrapper>
        </a>
      ))}
    </div>
  );
}
