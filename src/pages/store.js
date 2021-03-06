import {combineReducers, createStore, applyMiddleware} from "redux";
import notesReducer from './Mainpage/slice/noteSlice';
import issueReducer from './TemporaryPages/gitSlice'
import userReducer from "./User/slice/userSlice";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const reducer = combineReducers({
  notes: notesReducer,
  issues: issueReducer,
  user: userReducer
});

const store = createStore(reducer, composedEnhancer);

export default store;