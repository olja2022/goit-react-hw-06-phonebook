import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import storeRedux, { persister } from './store/indexStore';
import { PreLoader } from 'components/PreLoader';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {}
    <Provider store={storeRedux}>
      {}
      <PersistGate loading={<PreLoader />} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
