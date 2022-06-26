import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { setNeedRotate, store } from './store';

const MyHeadlessTask = async () => {
  console.log('Receiving Rotation!');
  store.dispatch(setNeedRotate(true));
  setTimeout(() => {
    store.dispatch(setNeedRotate(false));
  }, 1000);
};

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


AppRegistry.registerHeadlessTask('RotateModule', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => RNRedux);
