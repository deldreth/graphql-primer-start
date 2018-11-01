import React, { memo } from 'react';

import { Query } from 'react-apollo';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

import AddLocation from './AddLocation';
import { LOCATIONS_QUERY } from '../graphql/queries';

function Locations(props) {
  return (
    <Container>
      <AddLocation />

      <h5>
        <Link to={`/location/todo`}>Todo: Location name</Link>
      </h5>
    </Container>
  );
}

export default memo(Locations);

const Container = styled('div')`
  margin: 1em;
`;
