
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const colors = [
  '#e3bb88', '#db9864',
  '#b0695a', '#937e81',
  '#6d5e65', '#594c56'
];

const Item = styled.div`
  padding: 2em;
  display: flex;
  min-width: 20%;
  align-items: center;
`;

class ForecastItem extends React.Component {
  render() {
    const {
      id,
      date,
      averageTemp,
      weatherState,
      predictability
    } = this.props;

    return (
      <Item style={{ background: colors[id] }}>
        <span>
          <p style={{ fontSize: '20px' }}>{moment(date).format('dddd')}</p>
          <p style={{ fontSize: '26px'}}>{averageTemp} °C</p>
          <p>{weatherState}</p>
          <p>{predictability}% certain</p>
        </span>
      </Item>
    );
  }
}

export default ForecastItem;
