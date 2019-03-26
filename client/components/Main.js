import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';

import SearchForm from './SearchForm';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 90%
`;

class Main extends Component {

  render() {
    return (
      <MainWrapper>
         <Switch>
          <Route exact path="/" component={SearchForm} />
          {/* <Route exact path="/jobs" component={JobList} /> */}
        </Switch>
      </MainWrapper>
    )
  }
}

const MainContainer = withRouter(Main)
export default MainContainer
