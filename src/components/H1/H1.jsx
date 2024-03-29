import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 24px;
  line-height: 34px;
  font-weight: bold;
  color: #4a4a4a;
  font-family: 'Poppins', sans-serif;
`;

const H1 = ({ children, ...props }) => {
  return <StyledH1 {...props}>{children}</StyledH1>;
};

export default H1;
