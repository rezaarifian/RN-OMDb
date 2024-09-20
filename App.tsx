import React from 'react';

// store
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@stores';

// navigation
import Main from '@routes';

// components
import StatusBarComp from '@components/StatusBar';

const App: () => React.ReactNode = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBarComp />
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
