
import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './containers/TestPage';
import { Provider } from 'react-redux'
import configureStore from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App';
import HomePage from './components/Home/HomePage';
import VehiclesPage from './components/Vehicles/VehiclesPage';
import VehiclePage from './components/Vehicles/VehiclePage';
import history from './services/history'

const store = configureStore()

ReactDOM.render(
  <Provider store={store} history={history}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/vehicles" component={VehiclesPage}></Route>
          <Route path="/vehicles/new" component={VehiclePage} />
          <Route path="/vehicles/:id" component={VehiclePage} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
