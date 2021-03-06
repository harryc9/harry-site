import React, { Component } from 'react'
import styled from 'styled-components'
import anime from 'animejs'

const ContactDiv = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.2em;
  padding: 2rem;
  margin-left: 1rem;
  background-color: #8b9d83;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  text-align: left;

  opacity: 0;

  p,
  img {
    margin: 0;
    font-size: 0.8em;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: hsla(0, 0%, 0%, 0.8);
  }
  .border-left {
    border-left: 0.5rem solid #3a4e48;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  .border-left p {
    font-size: 0.8em;
  }
  .social-p {
    font-size: 0.8rem;
  }

  @media (max-width: 1200px) {
    margin: 1rem 0 0 0;
  }
`

export default class Contact extends Component {
  componentDidMount = () => {
    anime({
      targets: '#_contact',
      opacity: 1,
    })
    document.getElementById('_contact').scrollIntoView()
  }

  render() {
    return (
      <ContactDiv id="_contact">
        <div className="border-left">
          <p>Currently based in Waterloo, Canada. Always open to chat!</p>
        </div>
        <p className="social-p">hchoi9413@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/hchoi9413/"
          target="_blank"
          className="social-p"
        >
          <u>LINKEDIN</u>
        </a>
        <br />
        <a
          href="https://github.com/harryc9"
          target="_blank"
          className="social-p"
        >
          <u>GITHUB</u>
        </a>
      </ContactDiv>
    )
  }
}
