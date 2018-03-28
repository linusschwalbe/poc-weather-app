
import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: whitesmoke;
`;

class FieldItem extends React.Component {
  render() {
    const { location, selected } = this.props;

    return (
      <Item style={selected ? {background: 'lightblue'} : {}}>
        <span>{location}</span>
      </Item>
    )
  }
}

export default FieldItem;
