
import React from 'react';
import styled from 'styled-components'

import Field from './components/Field';

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

class Search extends React.Component {
  render() {
    return (
      <Wrapper>
        <Field />
      </Wrapper>
    );
  }
}

export default Search;
