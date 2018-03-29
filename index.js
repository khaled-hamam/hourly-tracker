import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import HourlyTracker from './app/HourlyTracker';
import store from './app/config/store';

const AppContainer = () => (
    <Provider store={store}>
        <HourlyTracker />
    </Provider>
);

AppRegistry.registerComponent('HourlyTracker', () => AppContainer);
