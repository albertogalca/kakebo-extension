import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import defaultTheme from 'themes/default';
import { Switch, Route, MemoryRouter, Redirect } from 'react-router-dom';

import { KakeboModal } from './components';
import routes from './routes';

import './assets/styles.css';

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
              {routes.map(route => {
                if (route.slug === '/') {
                  return (
                    <Route path={route.slug}>
                      {window.localStorage.getItem('userHasSeenTheIntroduction') ? (
                        <Redirect to="/doyouneedit" />
                      ) : (
                        <KakeboModal
                          actions={route.actions}
                          title={route.title}
                          description={route.description}
                          gif={route.gif}
                        />
                      )}
                    </Route>
                  );
                }

                return (
                  <Route path={route.slug}>
                    <KakeboModal
                      actions={route.actions}
                      title={route.title}
                      description={route.description}
                      gif={route.gif}
                    />
                  </Route>
                );
              })}
            </Switch>
          </div>
        </MemoryRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

ReactDOM.render(<App />, appContainer);
