import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyles = `
  padding: 14px 33px 10px 34.6px;
  border-radius: 50px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  max-width: 239px;
  min-width: 239px;
  display: inline-block;
  margin: 0 8px;
  box-sizing: border-box;
`;

const getButtonStyle = ({ secondary }) => {
  if (secondary)
    return `
        background-color: transparent;
        color: rgba(243, 144, 226, 1);
        box-shadow: 0 6px 12px 0 rgba(244, 144, 225, 0.5);
        border: 2px solid #f290e3;
    `;

  return `
        color: white;
        border-radius: 27.5px;
        box-shadow: 0 6px 12px 0 rgba(244, 144, 225, 0.5);
        background-color: #f490e1;
        border: 2px solid #f290e3;
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
