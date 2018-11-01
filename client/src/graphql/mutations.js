import gql from 'graphql-tag';

export const ADD_CAT_MUTATION = gql`
  mutation addCat($input: CatInput) {
    addCat(input: $input) {
      id
      name
      breed
    }
  }
`;

export const ADD_LOCATION_MUTATION = gql`
  mutation addLocation($input: LocationInput) {
    addLocation(input: $input) {
      id
      name
    }
  }
`;
