import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styled from 'react-emotion';

import breeds from '../data/breeds';

export default class AddCat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      breed: '',
    };
  }

  onChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <Form>
        <FormControl>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChange('name')}
          />
        </FormControl>

        <FormControl>
          <label>Breed</label>
          <select value={this.state.breed} onChange={this.onChange('breed')}>
            <option value="" />
            {breeds.map(breed => {
              return (
                <option key={breed.value} value={breed.value}>
                  {breed.label}
                </option>
              );
            })}
          </select>
        </FormControl>

        <button onClick={() => {}}>Add cat</button>
      </Form>
    );
  }
}

AddCat.propTypes = {
  locationId: PropTypes.string,
};

const Form = styled('form')`
  max-width: 50%;

  display: grid;
  grid-gap: 1em;

  grid-template-columns: repeat(2, 1fr);

  input[type='text'],
  select {
    width: 100%;
    margin: 0;
  }
`;

const FormControl = styled('fieldset')``;
