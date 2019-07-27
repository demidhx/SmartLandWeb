import React from 'react';
import {
  Card,
  Button,
  Table,
  DatePicker,
} from 'antd';
import './diary-management-login.css'
import LinkButton from '../../modal/link-button/link-button';


class DiaryManagementLogin extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    const title=(
      <div className="enquiry">
        选择查询时间
        <div className="enquiry-date">
          <DatePicker placeholder="请选择起始时间" style={{width:200}}/>
          -
          <DatePicker placeholder="请选择起始时间" style={{width:200}}/>
        </div>
        <Button type="primary">查询</Button>
      </div>
    )

    const dataSource = [
      {
        key: '1',
        number:'1',
        name: '张三',
        institution:'湖南省耕地保护处',
        loginIP:'127.0.0.1',
        LoginMachineName:'computer01',
        time:'2019/12/12',
        ope:'操作',
      },
      {
        key: '2',
        number:'2',
        name: '平四',
        institution:'邵阳市耕地保护处',
        loginIP:'127.0.0.1',
        LoginMachineName:'computer02',
        time:'2019/12/12',
        ope:'操作',
      },
      {
        key: '3',
        number:'3',
        name: '李四',
        institution:'邵阳市耕地保护处',
        loginIP:'128.0.0.1',
        LoginMachineName:'computer01',
        time:'2019/12/12',
        ope:'操作',
      },
    ];

    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '所在机构',
        dataIndex: 'institution',
        key: 'institution',
      },
      {
        title: '登录IP',
        dataIndex: 'loginIP',
        key: 'loginIP',
      },
      {
        title: '登录机器名',
        dataIndex: 'LoginMachineName',
        key: 'LoginMachineName',
      },
      {
        title: '登录时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '操作',
        render:()=>(<LinkButton onClick={this.props}>删除</LinkButton> )
      },
    ];

    return (
      <Card
        title={title} // extra={<a href="#">More</a>}
        style={{margin:20}}
      >
        <Table
          // bordered
          dataSource={dataSource}
          columns={columns} />
      </Card>
    );
  }

}
export default DiaryManagementLogin