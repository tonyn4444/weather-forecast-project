import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers';

// Provider is what allows Redux to be used with React
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

// function to create store (which holds application state) 
//and function to create store with middleware
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render (
	<Provider store={createStoreWithMiddleware(reducers)}>
 	 <App />
 	</Provider>
  ,
  document.getElementById('root')
);
