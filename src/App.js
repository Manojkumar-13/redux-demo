import React from 'react';
import { createStore } from 'redux';

const reducer = (state,action)=>{
  if(action.type === 'INCREMENT'){
    return state + action.payload;
  }else if (action.type === 'DECREMENT'){
    return state - 1;
  }
  return state;
}
const store = createStore(reducer,0)
store.subscribe(()=>{
  console.log('current state', store.getState());
})
store.dispatch({type:'INCREMENT',payload:5});
store.dispatch({type:'DECREMENT'});

const App = () => {
  return (
    <>
    <h1>Redux ToolKit</h1>
    <div className="form-control">
      <label htmlFor="payload">
      </label>
      <input type="number"
      name='payload'
      id='payload' />
    </div>
    </>
  )
}

export default App
// redux is called state management library