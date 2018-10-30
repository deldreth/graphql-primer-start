import React, { Component } from 'react';

import styled from 'react-emotion';

export default class AddLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <Form>
        <input
          type="text"
          placeholder="New location"
          value={this.state.name}
          onChange={this.onChange}
        />

        <button onClick={() => {}}>Add</button>
      </Form>
    );
  }
}

const Form = styled('form')`
  display: grid;
  grid-gap: 1em;

  grid-template-columns: 2fr 1fr;

  input,
  select {
    width: 100%;
    margin: 0;
  }
`;
