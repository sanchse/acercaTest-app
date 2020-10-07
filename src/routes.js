import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from './components/App';
import HomePage from './components/Home/HomePage';
import VehiclesPage from './components/Vehicles/VehiclesPage';
import VehiclePage from './components/Vehicles/VehiclePage';

export default (
    <Route exact path="/" component={App}>
     
        <Route path="/vehicles" component={VehiclesPage}>
            <Route path="/vehicles/:id" component={VehiclePage} />
            <Route path="/vehicles/new" component={VehiclePage} />
        </Route>
    </Route>
);