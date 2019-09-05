import React,{Component} from 'react';
import {Modal,Row,Col,Button} from 'antd';


const confirm = Modal.confirm;

export default class Modals extends Component{
    constructor(){
        super();
        this.state={
            basicVisible:false,
            asyncVisible:false,
            ModalText:'异步Modal',
            confirmLoading:false,
            footVisible:false,
            loading:false,
        }
    }
    BasicClick = ()=>{
        this.setState({
            basicVisible:true
        })
    }
    BasicOk = ()=>{
        this.setState({
            basicVisible:false
        })
    }
    BasicCancel =() =>{
        this.setState({
            basicVisible:false
        })
    }
    AsyncClick =()=>{
        this.setState({
            asyncVisible:true
        })
    }
    AsyncOk =()=>{
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        })
        setTimeout(() =>{
            this.setState({
                asyncVisible:false
            })
        },2000)   
    }
    AsyncCancel =()=>{
        this.setState({
            asyncVisible:false
        })
    }
    FooterClick =()=>{
        this.setState({
            footVisible:true,
        })
    }
    FooterCancel =()=>{
        this.setState({
            footVisible:false,
        })
    }
    FooterOk =()=>{
        this.setState({ 
            loading: true 
        });
        setTimeout(() => {
            this.setState({
                loading: false, 
                footVisible: false 
            });
        }, 3000);
    }
    onConfirm =()=>{
        confirm({
            title: 'Do you want to delete these items?',
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
          });
    }
    info = ()=> {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
    }
      
    success = ()=> {
        Modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...',
        });
    }
      
     error= ()=>{
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
    }
      
    warning= ()=>{
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
    }
    render(){
        return(
            <div className='wrapper-body'>
                <Row>
                    <Col className="gutter-row" >
                        <Button type="primary" onClick={this.BasicClick}>基本Modal</Button>
                        <Modal title="Basic Modal" visible={this.state.basicVisible} onOk={this.BasicOk}
                            onCancel={this.BasicCancel}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </Col>
                    <Col className="gutter-row" >
                        <Button type="primary" onClick={this.AsyncClick}>异步关闭</Button>
                        <Modal title="Async Modal" visible={this.state.asyncVisible} onOk={this.AsyncOk} 
                            confirmLoading={this.state.confirmLoading} onCancel={this.AsyncCancel}>
                            <p>{this.state.ModalText}</p>
                        </Modal>
                    </Col>
                    <Col className="gutter-row" >
                        <Button type='primary' onClick={this.FooterClick}>自定义页脚</Button>
                        <Modal visible={this.state.footVisible} title="自定义页脚" footer={[
                                <Button key="back" onClick={this.FooterCancel}>Return</Button>,
                                <Button key="submit" type="primary" loading={this.state.loading} onClick={this.FooterOk}>
                                Submit
                                </Button>,
                            ]}>
                            <p>自定义页脚</p>
                        </Modal>
                    </Col>
                    <Col className="gutter-row">
                        <Button type="primary" onClick={this.onConfirm}>确认对话框</Button>
                    </Col>
                    <Col className="gutter-row">
                        <Button onClick={this.info}>信息提示</Button>
                        <Button onClick={this.success}>成功</Button>
                        <Button onClick={this.error}>失败</Button>
                        <Button onClick={this.warning}>警告</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}