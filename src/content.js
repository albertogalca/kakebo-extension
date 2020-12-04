import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import defaultTheme from 'themes/default';
import { Switch, Route, MemoryRouter } from 'react-router-dom';

import { Welcome, DoYouNeedIt, CanYouAffordIt } from './screens';

const root = document.createElement('div');
const shadow = root.attachShadow({ mode: 'open' });

const styleContainer = document.createElement('div');
const appContainer = document.createElement('div');

shadow.appendChild(styleContainer);
shadow.appendChild(appContainer);

document.body.appendChild(root);

const App = () => {
  return (
    <StyleSheetManager target={styleContainer}>
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>
          <div>
            <Switch>
              <Route path="/doyouneedit">
                <DoYouNeedIt />
              </Route>
              <Route path="/canyouaffordit">
                <CanYouAffordIt />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </div>
        </MemoryRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

ReactDOM.render(<App />, appContainer);
