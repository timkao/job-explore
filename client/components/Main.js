import React, { Component } from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  color: red;
`;

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        Hello world!
      </MainWrapper>
    )
  }
}

export default Main
