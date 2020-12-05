import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h1`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  color: #4a4a4a;
  font-family: 'Poppins', sans-serif;
`;

const H1 = ({ children, ...props }) => {
  return <StyledH2 {...props}>{children}</StyledH2>;
};

export default H1;
