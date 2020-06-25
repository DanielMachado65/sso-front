import React from 'react';

import { initialState, mainReducer } from './context/reducer';
import { StateProvider } from './context/state';

import Main from './Main';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <Main />
    </StateProvider>
  );
}

export default App;
