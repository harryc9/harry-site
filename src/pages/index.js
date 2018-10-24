import React from 'react'
import styled from "styled-components"
import anime from 'animejs'
// import { Transition } from 'react-transition-group'

import Layout from '../components/layout'
import Description from '../components/description'
import Contact from '../components/contact'

const Brain = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.2em;
  padding: 2rem;
  background-color: #8B9D83;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  text-align: right;
  #name {
    letter-spacing: 0.5rem;
    opacity: 0;
  }
  #role {
    opacity: 0;
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
    opacity: 0;
  }
  #show-contact-btn {
    opacity: 0;
  }
`

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDescription: false,
      showContact: false,
    }
  }

  componentDidMount = () => {
    anime({
      targets: '#name',
      opacity: 1,
      delay: 300,
    });
    anime({
      targets: '#role',
      opacity: 1,
      delay: 500,
    });
    anime({
      targets: '#show-description-btn',
      opacity: 1,
      delay: 900,
    });
    anime({
      targets: '#show-contact-btn',
      opacity: 1,
      delay: 900,
    });
  }

  toggleDescription = () => {
    this.setState(prevState => ({
      showDescription: !prevState.showDescription
    }));
  }

  toggleContact = () => {
    this.setState(prevState => ({
      showContact: !prevState.showContact
    }));
  }

  render() {
    return (
      <Layout>
        <Brain>
          <h1 id="name">HARRY CHOI</h1>
          <p id="role">Engineer & Entrepreneur</p>
          <button className="nav-btn" id="show-description-btn" onClick={this.toggleDescription}>about me?</button>
          <br/>
          <button className="nav-btn" id="show-contact-btn" onClick={this.toggleContact}>msg me?</button>
        </Brain>
        { this.state.showDescription ? (
          // <Transition
          //   in={this.state.showDescription}
          //   timeout={{
          //     exit: 10000,
          //   }}
          // >
          <Description></Description>
          // </Transition>
        ) : null }
        { this.state.showContact ? <Contact></Contact> : null }
      </Layout>
    )
  };
}
