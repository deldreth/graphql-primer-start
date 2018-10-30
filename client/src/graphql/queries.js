import gql from 'graphql-tag';

export const LOCATION_QUERY = gql`
  query location($id: ID!) {
    location(id: $id) {
      name
      cats {
        id
        name
        breed
      }
    }
  }
`;

export const LOCATIONS_QUERY = gql`
  {
    locations {
      id
      name
    }
  }
`;
