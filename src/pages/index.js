import { connect } from 'react-redux';
import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Layout} from 'antd';
import Sidebar from './components/siderCustom';
import Header from './components/headerCustom'
import {outLoginAction} from '../store/loginStore/loginAction';
import '../style/index.css';
import 'antd/dist/antd.css';

const {Content,Footer}=Layout;

class Index extends Component {
	constructor(){
		super();
		this.state={
			collapsed:false,
			hidden:false
		}
	}
	toggle = () => {
		this.setState({
		  collapsed: !this.state.collapsed,
		  hidden:!this.state.hidden,
		});
	};
	outLogin(){
		const username="未登录"
		this.props.OUTLOGIN(username,this.props.history);
	}
	render() {
		if(this.props.isLogin.isLogin===false){
			return <Redirect to="/" />
		}
		console.log("this.props==",this.props)
		return (
			<div className="ant-layout-base">
				<Layout style={{height:'100%'}}>
					<Sidebar collapsed={this.state.collapsed} hidden={this.state.hidden} />
					<Layout id="main-content-div" style={{flexDirection: 'column'}}>
						<Header userName={this.props.isLogin.username} toggle={this.toggle} collapsed={this.state.collapsed} trigger={null} collapsible outLogin={this.outLogin.bind(this)}/>
						<Content className="content-body" style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
							{this.props.children}
						</Content>
						<Footer style={{ textAlign: 'center'}}>
							React-Admin ©Created by 1107221366@qq.com
						</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isLogin:state.isLogin,
		username:state.username
	}
}

function mapDispatchToProps(dispatch) {
	return {
		OUTLOGIN:function(username,history){
			const action=outLoginAction(username);
			dispatch(action);
			history.push("/")
		}
	};
}

var HomeReactRedux = connect(mapStateToProps,mapDispatchToProps)(Index);

export default HomeReactRedux