import React,{Component} from 'react';
import {Menu,Icon,Avatar,Layout} from 'antd';
// import '../../style/pages/headerCustom.css';
import avatar from '../../img/04.jpg';


const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component{
   
    logout = () => {
        this.props.outLogin()
    };
    render(){
        return(
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}  onClick={this.props.toggle}/>
                <Menu mode="horizontal" style={{ lineHeight: '64px', float: 'right' }}>
                    <SubMenu title={<span ><Avatar size="large" src={avatar}/></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好-{this.props.userName}</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>
                        {/* <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup> */}
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}



export default HeaderCustom;