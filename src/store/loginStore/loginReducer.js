// var isLogin =false;
var defaultState={
    isLogin:false,
    username:'未登录',
}
function loginReducer(state= defaultState ,action){
    let newState=JSON.parse(JSON.stringify(state));
    switch (action.type) {
		case "GO_LOGIN":
            //登录
            newState.isLogin=true;
            newState.username=action.username
			return newState
		case "OUT_LOGIN":
            //退出登录
            newState.isLogin=false;
            newState.username="未登录"
			return newState
		default:
		  	return state
	}
}

export default loginReducer;