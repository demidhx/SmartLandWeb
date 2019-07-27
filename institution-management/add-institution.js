import React from 'react';
import {Button,Select,Card,Modal,Table, Input, InputNumber, Popconfirm, Form, message, Row, Col} from 'antd';
import './institution.css'
import ProvinceSelect from "./province-select";


class AddInstitution extends React.Component{

    render(){
        return(
            <div className="gutter-example">
                <Row  gutter={16}>
                    <Col className="gutter-row" span={6}> 省<ProvinceSelect className='space1'/></Col>
                    <Col className="gutter-row" span={6}> 市<ProvinceSelect className='space1'/></Col>
                    <Col className="gutter-row" span={6}> 县<ProvinceSelect className='space1'/></Col>
                    <Col className="gutter-row" span={6}> 机构名称<br/><Input className='areaInput'placeholder='请输入内容'/></Col>

                </Row>
            </div>
        );
    }
}
export default AddInstitution