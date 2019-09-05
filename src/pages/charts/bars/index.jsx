import React,{Component} from 'react';
import { Row, Col, Card } from 'antd';
import BasicBar from './BasicBar.jsx';
import LineBar from './LineBar.jsx';
class BarCharts extends Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={11}>
                        <div className="gutter-box">
                            <Card title="基本柱状图" bordered={false}>
                                <BasicBar />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={11}>
                        <div className="gutter-box">
                            <Card title="折柱图" bordered={false}>
                                <LineBar />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BarCharts;