
import React from 'react';
import styled from 'styled-components';

import ForecastItem from './ForecastItem';

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  position: absolute;

  @media (max-width: 768px) {
    overflow: auto;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  justify-content: justify;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

class Forecast extends React.Component {
  render() {
    const { forecastData: { data, location } } = this.props;

    return (
      <Wrapper>
        <h1 style={{ padding: '1em' }}>{location}</h1>
        <Container>
          {
            data.map((item, key) => {
              return (<ForecastItem {...item} id={key} key={key} />)
            })
          }
        </Container>
      </Wrapper>
    );
  }
}

export default Forecast;
