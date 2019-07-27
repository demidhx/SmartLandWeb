import React from 'react';
import {Button, Select, Card, Modal, Table, Input, InputNumber, Popconfirm, Form, message, Row, Col} from 'antd';
import InManageTable from  './institution-managetable'
import AddInstitution from "./add-institution";
import './institution.css'

class InstitutionManagement extends React.Component{
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
            <Card>

                <AddInstitution className='list'/>
                <Row>
                    <Col>
                        <Button type='primary' className='saveButton' disabled >保存</Button>
                        <Button  type='primary' className='addButton' >新增</Button>
                    </Col>

                </Row>
                <InManageTable className='list'
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
                area: 'London No. 1 Lake Park',
            structure: '耕保处',
            code:1
        },
        {
            index: '2',
                area: 'Sidney No. 1 Lake Park',
            structure: '耕保处',
            code:2
        },
        {
            index: '3',
                area: 'Sidney',
            structure: '耕保处',
            code:3
        },
        {
            index: '4',
            area: 'Lake Park',
            structure: '耕保处',
            code:4
        }
        ];
            this.setState({
            data: data
        })
    };


}

export default InstitutionManagement