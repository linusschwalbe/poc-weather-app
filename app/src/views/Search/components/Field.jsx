
import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

import FieldItem from './FieldItem';

const Form = styled.form`
  display: flex;
  position: relative;
  justify-content: center;
`;

const Input = styled.input`
  top: 0;
  z-index: 2;
  color: #fff;
  border: none;
  padding: 0.5em;
  font-size: 16px;
  line-height: 1.5;
  min-width: 320px;
  min-height: 2.5em;
  position: absolute;
  font-weight: normal;
  background: transparent;
  text-transform: capitalize;
  font-family: opensans-regular, sans-serif;

  &::placeholder {
    color: #fff;
  }
`;

const AutoComplete = styled.span`
  top: 0;
  z-index: 1;
  padding: 0.5em;
  position: absolute;
  min-width: 320px;
  min-height: 2.5em;
  background: rgba(255, 255, 255, 0.33);
  color: rgba(255, 255, 255, 0.33);
`;

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLetter: '',
      actualLocations: [],
      suggestedLocations: []
    }

    this.queryWeather = this.queryWeather.bind(this);
    this.queryLocation = this.queryLocation.bind(this);
  }

  queryWeather(event) {
    event.preventDefault();

    const { suggestedLocations } = this.state;

    if (suggestedLocations[0].woeid) {
      this.props.history.push(`/weather/${suggestedLocations[0].woeid}`);
    }
  }

  queryLocation({ target: { value } }) {
    const { currentLetter, actualLocations, suggestedLocations } = this.state;

    if (!value[0]) {
      return this.setState({
        currentLetter: '',
        actualLocations: [],
        suggestedLocations: []
      });
    }

    if (currentLetter[0] !== value[0].toLowerCase()) {
      return fetch(`/api/location?search=${value.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            currentLetter: value.toLowerCase(),
            actualLocations: data,
            suggestedLocations: data
          });
        })
        .catch((error) => error);
    }

    this.setState({
      suggestedLocations: actualLocations.filter((location) =>
        location.title.toLowerCase().startsWith(value.toLowerCase())
      )
    });
  }

  render() {
    const { suggestedLocations } = this.state;

    return (
      <Form onSubmit={this.queryWeather}>
        <Input type="text" placeholder="Search For Location" onChange={this.queryLocation} />
        <AutoComplete>
          {suggestedLocations[0] && suggestedLocations[0].title}
        </AutoComplete>

        <p style={{ fontSize: '12px', padding: '4em' }}>Type your city above and press enter.</p>
      </Form>
    );
  }
}

export default withRouter(Field);
