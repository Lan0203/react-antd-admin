import React,{Component} from 'react';
import {Row,Col,Card,Tabs,Icon,Radio} from 'antd';

const TabPane = Tabs.TabPane;

export default class TabsCustom extends Component{
    constructor(props) {
        super(props);
        this.state = {
          mode: 'top',
        };
    }
    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    }
    render(){
        return(
            <div>
                <Row>
                    <Col className="gutter-row" span={11}>
                        <Card title="基本-默认选中第一项">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <Card title="禁用某一项">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
                                <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <Card title="可滑动">
                            <Radio.Group onChange={this.handleModeChange} value={this.state.mode} style={{ marginBottom: 8 }}>
                                <Radio.Button value="top">Horizontal</Radio.Button>
                                <Radio.Button value="left">Vertical</Radio.Button>
                            </Radio.Group>
                            <Tabs defaultActiveKey="1" tabPosition={this.state.mode} style={{ height: 220 }}>
                                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={11}>
                        <Card title="带图标的标签">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Tab 1</TabPane>
                                <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">Tab 2</TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                    
                    <Col className="gutter-row" span={11}>
                        <Card title="卡片式">
                            <Tabs defaultActiveKey="1" type="card"> 
                                <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
                                <TabPane tab="Tab 2" key="2">Tab 2</TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}