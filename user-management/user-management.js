import React from 'react';
import {Button,Card,Modal,Table, Input, InputNumber, Popconfirm, Form, message,} from 'antd';
import DeletaSpan from '../../modal/deletaspan'
import 'antd/dist/antd.css';
import  UserManageTable from'./user-managetable'
import { Row, Col } from 'antd';
import './user.css'
import AddUser from'./adduser'

class UserManagement extends React.Component {

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

        const {selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
        };


        return (
            <Card>
                    <AddUser/>
                    <UserManageTable
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
        const data = [
            {
                index: 1,
                user: "Lina",
                password: "001",
                email: "000001",
                phone: '111111',
                code: 1
            }, {
                index: 2,
                user: "Banana",
                password: "002",
                email: "000002",
                phone: '111112',
                code: 2
            }, {
                index: 3,
                user: "Candy",
                password: "003",
                email: "000003",
                phone: '111113',
                code: 3
            }, {
                index: 4,
                user: "Dana",
                password: "004",
                email: "000004",
                phone: '111114',
                code: 4
            }

        ];
        this.setState({
            data: data
        })
    }
}

export default UserManagement