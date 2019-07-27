import React from 'react';
import {Table, Input, InputNumber, Popconfirm, Form, message, Card} from 'antd';
import DeletaSpan from '../../modal/deletaspan'

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);
class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class RoleManageTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingKey: '',
        }
        this.isEditing = this.isEditing.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.getFetch = this.getFetch.bind(this);

    }

    columns = [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            sorter: (a, b) => a.index - b.index,
            render: text => <a href="javascript:;">{text}</a>,
            align:'center',
            width: '10%',
        },
        {
            title: '角色名',
            dataIndex: 'role',
            key: 'role',
            editable: true,
            align:'center',
            width: '25%',
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
            editable: true,
            align:'center',
            width: '25%',
        },
        {
            title: '操作',
            dataIndex: 'code',
            key: 'code',
            align: 'center',
            width: '20%',
            render: (text, record) => {
                const editable = this.isEditing(record);
                return (
                    <span>
                    <span>
                        {editable ? (
                            <span>
                                <EditableContext.Consumer>
                                    {form => (
                                        <span
                                            className='blue'
                                            onClick={() => this.save(form, record.code)}
                                            style={{marginRight: 8}}
                                        >
                                            保存
                                        </span>
                                    )}
                                    </EditableContext.Consumer>

                                <Popconfirm
                                    title="确定取消?"
                                    onConfirm={() => this.cancel(record.code)}
                                    okText="确定" cancelText="取消"
                                >
                                    <span className='blue'>取消</span>
                                </Popconfirm>
                            </span>
                        ) : (
                            <span className='blue' onClick={() => this.edit(record.code)}>编辑</span>
                        )}
                        </span>
                        <DeletaSpan
                            record={record}
                            getFetch={this.getFetch}
                            flag={true}
                            // flag={this.props.judgeOperation(this.props.operation,'DELETE')}
                        />

                </span>
                )
            }
        }
    ]

    render() {
        //  获取record的记录
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });
        //  单行编辑
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        return(
            <EditableContext.Provider value={this.props.form}>
            <Table className='rolelist'
                components={components}
                rowClassName="editable-row"
                rowKey={record => record.code}
                columns={columns}
                dataSource={this.props.data}
                   bordered
                   size="small"
                   scroll={{ y: 400 }}
                   pagination={{
                       onChange: this.cancel,
                   }}
            />
            </EditableContext.Provider>

        );
    }
    getFetch = () => {
        this.props.fetch();
    };
    /**实现字段搜索功能 */
    isEditing = (record) => {
        return record.code === this.state.editingKey;
    };

    edit(code) {
        this.setState({ editingKey: code });
    }

    save(form, id) {
        this.setState({ editingKey: '' });
    }

    cancel = () => {
        this.setState({ editingKey: '' });
    };


}

export default RoleManageTable