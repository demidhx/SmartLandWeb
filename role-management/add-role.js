import React from 'react';
import {Button,Select,Card,Modal,Table, Input, InputNumber, Popconfirm, Form, message} from 'antd';
import './table.css'
const { TextArea } = Input;
class AddRole extends React.Component{
    constructor(props) {
        super(props);
        }
      render(){
        return(
                <div className='addbox'>
                    <div className='role-input' style={{marginTop:20}}>
                        角色名
                    <Input className='input' placeholder='请输入内容'/>
                    </div>
                    <p></p>
                    <div className='role-input'>
                        描述
                    <TextArea rows={4} className='textarea'/>

                    </div>
                    <div className='role-button'>
                        <Button  className='button1' type="primary" >新增</Button>
                        <Button  className='button2'disabled type="primary" >权限设置</Button>
                        <Button className='button3'disabled  type="primary" >保存</Button>
                    </div>
                </div>

        );
      }



    }

export default AddRole