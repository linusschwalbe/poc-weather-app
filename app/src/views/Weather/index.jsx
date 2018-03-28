
import React from 'react';
import styled from 'styled-components';

import Forecast from './components/Forecast';

const Loader = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      readyState: false,
      forcastData: {}
    };
  }

  componentWillMount() {
    const value = this.props.match.params.id;

    if (value) {
      return fetch(`/api/forecast?id=${value}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          readyState: true,
          forecastData: data
        });
      })
      .catch((error) => error);
    }
  }

  render() {
    const { readyState, forecastData } = this.state;

    return (
      <div>
        {
          readyState ?
            <Forecast {...{forecastData}} />
              :
            <Loader>
              <p>Fetching forecast..</p>
            </Loader>
        }
      </div>
    );
  }
}

export default Weather;
