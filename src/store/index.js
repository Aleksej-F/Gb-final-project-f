import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
   e:0,
})

const loggerMiddeleware = (store) => (dispatch) => (action) =>{
   //console.log('loger  ', store, dispatch, action )
   return dispatch(action)
}

export const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(loggerMiddeleware,thunk)),
);
