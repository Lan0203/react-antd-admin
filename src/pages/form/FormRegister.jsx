import React,{Component} from 'react';
import {Card,Form, Input, Tooltip, Icon, Cascader, Select, Row,Col, Checkbox,  Button, AutoComplete, } from 'antd';

const { Option } = Select;
const FormItem = Form.Item;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
class FormRegister extends Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {
        const { getFieldDecorator } = this.props.form;  
        const formItemLayout = {
            labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
            },
            wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
            </Select>,
        );
        return (
            <Row>
                <Col span={16} offset={4}>
                    <Card  title={<div style={{textAlign:'center'}}>用户注册</div>} style={{width:'100%'}}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem  {...formItemLayout}  label="邮箱" hasFeedback>
                                {getFieldDecorator('email', {
                                    rules: [{ type: 'email', message: '请输入合理的邮箱地址!',}, 
                                    { required: true, message: '请输入邮箱地址!', }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout} label="密码" hasFeedback >
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!', }, 
                                    { validator: this.checkConfirm, }],
                                })(
                                    <Input type="password" />
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout} label="确认密码" hasFeedback>
                                {getFieldDecorator('confirm', {
                                    rules: [{ required: true, message: '请确认你的密码!',}, 
                                    { validator: this.checkPassword, }],
                                })(
                                    <Input type="password" onBlur={this.handleConfirmBlur} />
                                )}
                            </FormItem>
                            <FormItem  {...formItemLayout}  label={(
                                    <span> 昵称&nbsp; <Tooltip title="别人怎么称呼你?"> <Icon type="question-circle-o" /> </Tooltip> </span>
                                )} hasFeedback >
                                {getFieldDecorator('nickname', {
                                    rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout} label="常住地址">
                                {getFieldDecorator('residence', {
                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                    rules: [{ type: 'array', required: true, message: '请选择你的常住地址!' }],
                                })(
                                    <Cascader options={residences} />
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout} label="电话号码"  >
                                {getFieldDecorator('phone', {
                                    rules: [{ required: true, message: '请输入你的电话号码!' }],
                                })(
                                    <Input addonBefore={prefixSelector} />

                                )}
                            </FormItem>
                            <FormItem  {...formItemLayout} label="验证码"  extra="我们必须确认你不是机器人." >
                                <Row gutter={8}>
                                    <Col span={12}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{ required: true, message: '请输入你获取的验证码!' }],
                                        })(
                                            <Input size="large" />
                                        )}
                                    </Col>
                                    <Col span={12}>
                                        <Button size="large">获取验证码</Button>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                                {getFieldDecorator('agreement', {
                                    valuePropName: 'checked',
                                })(
                                    <Checkbox>我已经阅读过 <span>协议</span></Checkbox>
                                )}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" size="large">注册</Button>
                            </FormItem>
                        </Form>
                    </Card>
                </Col>
            </Row>
            
            
        );
    }
}
export default Form.create()(FormRegister)
  