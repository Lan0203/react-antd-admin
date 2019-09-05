import React,{Component} from 'react';
import {notification,Row,Col,Button,Icon,Select} from 'antd';

const { Option } = Select;

export default class Notifications extends Component{

    basicNotifications = ()=>{
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
              console.log('Notification Clicked!');
            },
        });
    }
    iconNotifications =()=>{
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    }
    styleNotification = ()=>{
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            style: {
              width: 600,
              marginLeft: 335 - 600,
            },
        });
    }
    selectNotification = ()=>{
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }
    render(){
        const openNotificationWithIcon = (type)=>{
            notification[type]({
                message: type,
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        }
        const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
        return(
            <div class="wrapper-body">
                <Row>
                    <Col className="gutter-row">
                        <Button type='primary' onClick={this.basicNotifications}>基本用法-4.5秒后自动关闭</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button type="primary" onClick={() => openNotificationWithIcon('success')}>Success</Button>
                        <Button type="default" onClick={() => openNotificationWithIcon('info')}>Info</Button>
                        <Button type="dashed" onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                        <Button type="danger" onClick={() => openNotificationWithIcon('error')}>Error</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button type="primary" onClick={this.iconNotifications}>自定义图标</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button type="primary" onClick={this.styleNotification}>自定义样式</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Select defaultValue="topRight" style={{ width: 120, marginRight: 10 }}
                            onChange={(val) => {notification.config({placement: val,});}}>
                            {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                        </Select>
                        <Button type="primary" onClick={this.selectNotification}>定义位置</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}