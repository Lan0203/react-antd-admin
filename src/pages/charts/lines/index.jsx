import React,{Component} from 'react';
import { Row, Col, Card } from 'antd';
import BasicLine from './BasicLine.jsx';
import StackLine from './StackedLine.jsx';
class LineCharts extends Component {
    render() {
        return (
            <div className="gutter-example">
                {/* <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="基本折线图" bordered={false}>
                                <BasicLine />
                            </Card>
                        </div>
                    </Col>
                </Row> */}
                <Row gutter={16}>
                    <Col className="gutter-row" md={11}>
                        <div className="gutter-box">
                            <Card title="基本折线图" bordered={false}>
                                <BasicLine />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={11}>
                        <div className="gutter-box">
                            <Card title="堆积折线图" bordered={false}>
                                <StackLine />
                            </Card>
                        </div>
                    </Col>
                </Row>
                {/* <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="散点图" bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default LineCharts;