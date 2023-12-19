import initialState from './initialState';
import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import tableChange from './TableRedux';


const subreducers = {
  tables: tableChange,
}

const reducer = combineReducers(subreducers);



const store = createStore(

  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;