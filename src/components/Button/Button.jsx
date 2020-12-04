import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyles = `

padding: 8px 16px;
border-radius: 50px;
text-transform: uppercase;
text-decoration: none;

font-weight: bold;
width: 100%;
max-width: 200px;
min-width: 200px;
display: inline-block;
margin: 0 8px;
`;

const getButtonStyle = ({ secondary }) => {
  if (secondary)
    return `
        background-color: white;
        color: rgba(243, 144, 226, 1);
        border: 1px solid rgba(243, 144, 226, 1);
    `;

  return `
        background-color: rgba(243, 144, 226, 1);
        color: white;
        border: 1px solid rgba(243, 144, 226, 1);
    `;
};

const StyledLink = styled(Link)`
  ${buttonStyles}
  ${props => getButtonStyle(props)}
`;

const StyledButton = styled.button`
  ${buttonStyles}
  ${props => getButtonStyle(props)}
`;

const StyledAnchor = styled.a`
  ${buttonStyles}
  ${props => getButtonStyle(props)}
`;

const Button = ({ as, children, secondary, ...props }) => {
  switch (as) {
    case 'link':
      return (
        <StyledLink secondary={secondary} {...props}>
          {children}
        </StyledLink>
      );
    case 'a':
      return (
        <StyledAnchor secondary={secondary} {...props}>
          {children}
        </StyledAnchor>
      );
    default:
      return (
        <StyledButton secondary={secondary} {...props}>
          {children}
        </StyledButton>
      );
  }
  return <div>Hola</div>;
};

export default Button;
