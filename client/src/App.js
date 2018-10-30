import React, { Component, lazy } from 'react';

import { HashRouter, Route } from 'react-router-dom';
import styled from 'react-emotion';

const Locations = lazy(() => import('./containers/Locations'));
const Agency = lazy(() => import('./containers/Agency'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid>
          <Route key="locations" path="/" component={Locations} />
          <Route key="location" path="/location/:id" component={Agency} />
        </Grid>
      </HashRouter>
    );
  }
}

export default App;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
