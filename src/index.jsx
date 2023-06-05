import ReactDOM from 'react-dom/client';
import './App/App.css';
import { Provider } from 'react-redux';

import { store } from './store';
import AppContainer from './App/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
