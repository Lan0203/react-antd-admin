import React,{Component} from 'react';
import {Menu,Icon,Layout} from 'antd';
import { Link  } from 'react-router-dom';
import MenuList from '../../config/menu';
import Logo from '../../img/logo2.png';
import Logo1 from '../../img/s.png';

const SubMenu = Menu.SubMenu;
const {Sider} =Layout;

class SiderCustom extends Component{
  constructor(){
    super();
    this.state={
      openKeys:'',
      firstHide: true,
    }
  }
  componentDidMount(){
    const menuTreeNode = this.renderMenu(MenuList);
    this.setState({
      menuTreeNode:menuTreeNode,
    })
  }
  onOpenChange = (v) =>{
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    })
  }
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={
            <span>
              {item.icon && <Icon type={item.icon}/>}
              <span>{item.title}</span>
          </span>}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      };
      return (
        <Menu.Item  key={item.key}>
          <Link  to={item.key}>
            {item.icon && <Icon type={item.icon}/>}
            <span>{item.title}</span>
          </Link >
        </Menu.Item>
      );
    })
  }

  render(){
    return(
      <Sider trigger={null} collapsible collapsed={this.props.collapsed} style={{height:"100%"}}>
        <img src={Logo} width="160" hidden={this.props.hidden} alt="HUIDIBI" style={{margin:'16px'}}/>
        <img src={Logo1} width="25" hidden={!this.props.hidden} alt="BI" style={{margin:'20px'}}/>
        <Menu mode="inline" theme="dark" openKeys={this.state.firstHide ? null : [this.state.openKey]} onOpenChange={this.onOpenChange} defaultSelectedKeys={['/home']}>
          {this.state.menuTreeNode}
        </Menu>
      </Sider>
    )
  }
}

export default SiderCustom