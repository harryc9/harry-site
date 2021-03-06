import React, { Component } from 'react'
import styled from 'styled-components'
import anime from 'animejs'

import HarryPicture from '../images/Harry.png'

const DescriptionDiv = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.2em;
  padding: 2rem;
  margin-left: 1rem;
  background-color: #8b9d83;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  text-align: left;

  opacity: 0;

  p,
  li {
    margin: 0;
    font-size: 0.8em;
  }
  .border-left {
    border-left: 0.5rem solid #3a4e48;
    padding-left: 1rem;
  }
  #harry-pic {
    display: block;
  }
  #fave-stack {
    margin-top: 2rem;
  }
  #fave-stack h3 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1200px) {
    margin: 1rem 0 0 0;
  }
`

export default class Description extends Component {
  componentDidMount = () => {
    anime({
      targets: '#_description',
      opacity: 1,
    })
    document.getElementById('_description').scrollIntoView()
  }

  componentWillUnmount = () => {
    anime({
      targets: '#_description',
      opacity: 0,
    })
  }

  render() {
    return (
      <div id="description-wrapper">
        <DescriptionDiv id="_description">
          <img src={HarryPicture} alt="Harry's ugly face" id="harry-pic" />
          <div className="border-left">
            <p>
              Hi! I'm Harry, currently working full-time as a{' '}
              <b>Software Engineer</b>.
            </p>
            <p>
              Currently obsessed with music, web technologies, and meeting new
              people.
            </p>
          </div>
          <div id="fave-stack">
            <h3>Current Stack:</h3>
            <ul>
              <li>React (Next.js)</li>
              <li>Node</li>
              <li>GraphQL (Apollo, Prisma)</li>
            </ul>
          </div>
        </DescriptionDiv>
      </div>
    )
  }
}
