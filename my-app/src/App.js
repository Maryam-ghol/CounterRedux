import React from 'react';
import Counter from './Components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';




const initialState = {
  count: 0,
}
const store = createStore(reducer);

//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.num };
    case "DECREMENT":
      return { count: state.count - action.num };
    default:
      return state;
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
