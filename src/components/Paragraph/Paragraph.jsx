import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #333;
`;

const Paragraph = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};

export default Paragraph;
