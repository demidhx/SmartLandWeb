import React from 'react';
import {Button,Select,Radio,Card,Modal,Table, Input, InputNumber, Popconfirm, Form, message, Row, Col,} from 'antd';
import { provinces, cities, counties } from './province-data';
import './institution.css'

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

class ProvinceSelect extends React.PureComponent {
    state = {
        size: 'default',
    };


    render() {
        const { size } = this.state;
        return (
            <div>
                <Select
                    size={size}
                    defaultValue="a1"
                    onChange={handleChange}
                    style={{ width: 200 }}
                >
                    {children}
                </Select>
            </div>
        );
    }
}

export default ProvinceSelect;