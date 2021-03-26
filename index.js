/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import RootReducer from './src/rootReducer';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

import {createStore, applyMiddleware} from 'redux';
import React, {Component} from 'react';
import ApiCall from './src/components/ApiCall';

export const store = createStore(RootReducer, composedEnhancer);

const ReduxApp = () => (
  <Provider store={store}>
    <ApiCall />
  </Provider>
);
AppRegistry.registerComponent(appName, () => ReduxApp);
