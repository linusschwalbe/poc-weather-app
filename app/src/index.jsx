
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Search from './views/Search';
import Weather from './views/Weather';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/weather/:id" component={Weather} />

        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
