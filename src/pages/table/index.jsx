import React from 'react';
import { Row, Col, Card } from 'antd';
import BasicTable from './BasicTable';
import SelectTable from './SelectTable';
import SortTable from './SortTable';
import SearchTable from './SearchTable';

const BasicTables = () => (
    <div className="gutter-example">
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="基础表格" bordered={false}>
                        <BasicTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
                <div className="gutter-box">
                    <Card title="基础表格" bordered={false}>
                        <SelectTable />
                    </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" md={11}>
                <div className="gutter-box">
                    <Card title="可控的筛选和排序" bordered={false}>
                        <SortTable />
                    </Card>
                </div>
            </Col>
            <Col className="gutter-row" md={11}>
                <div className="gutter-box">
                    <Card title="自定义筛选" bordered={false}>
                        <SearchTable />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
);

export default BasicTables;