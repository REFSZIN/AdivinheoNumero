import React, { Component } from 'react';
import styled from 'styled-components';
import Result from '../../components/Result';

class Home extends Component {
  static defaultProps = {
    secret: Math.floor(Math.random() * 50) + 1,
  };

  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  render() {
    return (
      <Main>
        <div>
          <label htmlFor="term">
            Escolha um número de 1 a 50:
          </label>
        </div>
        <input
          id="term"
          type="text"
          name="term"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <Result term={this.state.term} secretNum={this.props.secret} />
      </Main>
    );
  }
}

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  place-content: center flex-start;
  -webkit-box-pack: start;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export default Home;
