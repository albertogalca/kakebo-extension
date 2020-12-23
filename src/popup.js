import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Paragraph, H2 } from './components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin:0px !important;
    border-radius: 5px !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -moz-font-feature-settings: "liga" on;
  }
`;

const Box = styled.div`
  min-width: 300px;
  padding: 32px 24px;
  box-shadow: 0 11px 23px 0 rgba(0, 0, 0, 0.18);
  background-color: #ffffff;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 24px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

const Popup = () => {
  return (
    <Box>
      <Container>
        <GlobalStyle />
        <Header>
          <Logo src="https://i.imgur.com/EFaR68V.png" width="50" alt="logo" />
          <H2>¡No compres!</H2>
        </Header>

        <StyledParagraph>
          ¡Oinc, oinc! Soy el cerdito ahorrador y voy a vigilar todos tus movimientos para ayudarte.
        </StyledParagraph>
      </Container>
    </Box>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
