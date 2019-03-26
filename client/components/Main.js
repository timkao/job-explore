import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';

import SearchForm from './SearchForm';
import JobsList from './JobsList';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 90%
`;

function Main() {
  return (
    <MainWrapper>
        <Switch>
        <Route exact path="/" component={SearchForm} />
        <Route exact path="/jobs" component={JobsList} />
      </Switch>
    </MainWrapper>
  );
}

const MainContainer = withRouter(Main)
export default MainContainer
