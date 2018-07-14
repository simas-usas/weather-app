/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainFormPage from 'containers/MainFormPage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#90adfe',
      main: '#648cff',
      dark: '#5b81ec',
      contrastText: '#ffffff',
    }
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Switch>
          <Route exact path="/" component={MainFormPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </MuiThemeProvider >
  );
}
