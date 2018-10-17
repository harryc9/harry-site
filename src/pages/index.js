import React from 'react'
import styled from "styled-components"

import Layout from '../components/layout'
import Description from '../components/description'

const Brain = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.2em;
  padding: 2rem;
  background-color: #8B9D83;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  text-align: right;
  h1 {
    letter-spacing: 0.5rem;
  }
  p {
  }
  img {
    width: 1.75rem;
    height: 1.75rem;
  }
  .nav-btn {
    background-color: #BEB0A7;
    padding: 0.5rem;
    outline: none;
    border: 0;
    border-radius: 0.5rem;
    letter-spacing: 0.15rem;
    font-weight: 300;
    font-size: 1rem;
    color: #3A4E48;
    cursor: pointer;

    transition: 0.25s;
  }
  .nav-btn:hover {
    transform: translateX(0.2rem);
  }
  #show-description-btn {
    margin-bottom: 0.5rem;
  }
`

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDescription: false,
    }
  }

  toggleDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription
    }));
  }

  render() {
    return (
      <Layout>
        <Brain>
          <h1>HARRY CHOI</h1>
          <p>Engineer & Entrepreneur</p>
          <button className="nav-btn" id="show-description-btn" onClick={this.toggleDescription}>about me?</button>
          <br/>
          <button className="nav-btn" id="show-contact-btn">msg me?</button>
        </Brain>
        { this.state.showDescription ? <Description></Description> : null }
      </Layout>
    )
  };
}
