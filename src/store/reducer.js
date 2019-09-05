import { combineReducers } from 'redux';
import isLogin from './loginStore/loginReducer';


var reducer = combineReducers({
	isLogin,
})

export default reducer