import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #6b6b6b;
  font-family: 'Poppins', sans-serif;
`;

const Paragraph = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
