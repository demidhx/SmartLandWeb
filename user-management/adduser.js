import React from 'react';
import {Button, Card, Modal, Table, Input, InputNumber, Popconfirm, Form, message, Row, Col,} from 'antd';
import './user.css'
class AddUser extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="box" >

                <Row  className='space' >

                    <Col span={8} >用户名 <Input style={{width:100}} className='example-input' placeholder='请输入内容'/></Col>
                    <Col span={8}>密码 <Input style={{width:100}} className='example-input' placeholder='请输入内容'/></Col>
                    <Col span={8}>所在机构 <Input style={{width:100}} className='example-input' placeholder='请输入内容'/></Col>
                </Row>
                <p></p><p></p>
                <Row className='space' >
                    <Col span={8} >邮箱 <Input style={{width:100}} className='example-input' placeholder='请输入内容'/></Col>
                    <Col span={8}>电话 <Input style={{width:100}} className='example-input' placeholder='请输入内容'/></Col>
                    <Col span={8}>用户角色 <Input style={{width:100}} className='example-input' placeholder='请输入内容'/></Col>
                </Row>
                <p></p> <p></p>
                <Row>
                    <Col>
                        <Button type='primary' className='saveButton' disabled >保存</Button>
                        <Button  type='primary' className='addButton' >新增</Button>
                    </Col>

                </Row>
            </div>
        );
    }
}
export default AddUser