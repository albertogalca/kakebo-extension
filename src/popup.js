import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default';

import { Paragraph, H2 } from './components';

const Box = styled.div`
  min-width: 300px;
  padding: 38px 11px 38px 10px;
  box-shadow: 0 11px 23px 0 rgba(0, 0, 0, 0.18);
  border: solid 0.5px #979797;
  background-color: #ffffff;
`;

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <H2>Ahorra con el Método Kakebo</H2>
        <Paragraph>
          ¡Oinc, oinc! Soy el cerdito ahorrador y voy a vigilar todos tus movimientos para ayudarte.
        </Paragraph>
      </Box>
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
