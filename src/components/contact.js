import React, { Component } from 'react'
import styled from "styled-components"
import anime from "animejs"

import LinkedInIcon from '../images/linkedin.svg'

const ContactDiv = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.2em;
  padding: 2rem;
  margin-left: 1rem;
  background-color: #8B9D83;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  text-align: left;

  opacity: 0;

  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  .border-left {
    border-left: 0.5rem solid #3A4E48;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  #linkedin-icon {
    width: 1.5rem;
  }

  @media(max-width: 420px) {
    margin: 1rem 0 0 0;
  }
`;

export default class Contact extends Component {
  componentDidMount = () => {
    anime({
      targets: '#_contact',
      opacity: 1,
    });
  }

  render() {
    return (
      <ContactDiv id="_contact">
        <div className="border-left">
          <p>hchoi9413@gmail.com</p>
          <a href="https://www.linkedin.com/in/hchoi9413/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn Icon" id="linkedin-icon"/>
          </a>
        </div>
      </ContactDiv>
    )
  }
}
