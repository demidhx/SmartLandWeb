import React from 'react';
import {Button,Select,Card,Modal,Table, Input, InputNumber, Popconfirm, Form, message} from 'antd';
import RoleManageTable from  './role-managetable'
import AddRole from'./add-role'
import './table.css'

class RoleManagement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            selectedRowKeys: [],
            editingKey: '',
        }
        this.deleteByIds = this.deleteByIds.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    componentDidMount() {
        this.fetch();
    }

    selectRow = (record) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
    }
    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }


    render() {

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
        };

        return (
            <Card >
                     <AddRole/>
                    <RoleManageTable
                        fetch={this.fetch}
                        data={this.state.data}
                        rowSelection={rowSelection}
                    />
            </Card>
        );

    }
    deleteByIds = () => {

    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
    };
    cancel = () => {
        this.setState({
            selectedRowKeys: [],
        });
    }

    fetch = () => {
        const data= [{
            index: '1',
            role:'系统管理员',
            description: '',
            code:1
        },
            {
                index: '2',
                role:'省级管理员',
                description: '',
                code:2
            },
            {
                index: '3',
                role:'新邵县管理员',
                description: '',
                code:3
            },
            {
                index: '4',
                role:'普通用户',
                description: '',
                code:4
            }
        ];
        this.setState({
            data: data
        })
    };

}

export default RoleManagement