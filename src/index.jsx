import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import { store, persistor } from './store';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
		<PersistGate persistor={persistor}>
			<Routes />
		</PersistGate>
  </Provider>,
  document.getElementById('root'),
);

