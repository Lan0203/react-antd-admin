import React,{Component} from 'react';
import {Card,Form,Input,Button,Icon,Row,Col} from 'antd';

class FormLogin extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
    render() {
        const { getFieldDecorator} = this.props.form;
        return (
            <div>
                <Row>
                    <Col span={8} offset={8}>
                        <Card title={<div style={{textAlign:'center'}}>普通登录框</div>} style={{width:'100%'}}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                {getFieldDecorator('用户名', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('密码', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item>
                                <Button type="primary" block htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                
            </div>
          
        );
    }
}

export default Form.create()(FormLogin)