import React,{Component} from 'react';
import {message,Row,Col,Button} from 'antd';

export default class Messages extends Component{

    basicInfo= () =>{
        message.info('This is a normal message');
    }
    success = () => {
        message.success('This is a message of success');
    };
      
    error = () => {
        message.error('This is a message of error');
    };
      
    warning = () => {
        message.warning('This is message of warning');
    };
    display = ()=>{
        message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
    }
    loading =()=>{
        const hide = message.loading('Action in progress..', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2500);
    }
    sequence = () => {
        message.loading('Action in progress..', 2.5)
          .then(() => message.success('Loading finished', 2.5))
          .then(() => message.info('Loading finished is finished', 2.5));
    };
    render(){
        return(
            <div className="wrapper-body">
                <Row>
                    <Col className="gutter-row">
                        <Button type="primary" onClick={this.basicInfo}>普通提示</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button type="primary" onClick={this.success}>Success</Button>
                        <Button type="danger" onClick={this.error}>Error</Button>
                        <Button type="default" onClick={this.warning}>Warning</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button type="primary" onClick={this.display}>修改延时</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button onClick={this.loading}>加载中</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button onClick={this.sequence}>Promise 接口</Button>
                    </Col>

                </Row>
            </div>
        )
    }
}