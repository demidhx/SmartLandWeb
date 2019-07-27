import React from 'react';
import {
  Button,
  Table,
  Card, Checkbox,
} from 'antd';
import './role-authority-allocation.css'


// ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode);
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class RoleAuthorityAlloc extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {


    const dataSource = [
      {
        key: '1',
        number:'1',
        menu: '机构管理',
        function:'访问',
        authority:'',
      },
      {
        key: '2',
        number:'2',
        menu: '机构管理',
        function:'机构新增',
        authority:'',
      },
      {
        key: '3',
        number:'3',
        menu: '机构管理',
        function:'机构保存',
        authority:'',
      },
    ];

    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '菜单',
        dataIndex: 'menu',
        key: 'menu',
      },
      {
        title: '功能',
        dataIndex: 'function',
        key: 'function',
      },
      {
        title: '权限',
        render:()=>(<Checkbox onChange={onChange}> </Checkbox>)
      },
    ];

    return (
      <Card// extra={<a href="#">More</a>}
        style={{margin:20}}
      >
        <Table
          bordered
          dataSource={dataSource}
          columns={columns} />
          <div>
            <Button className="save-button">保存</Button>
            <Button className="reset-button">重置</Button>
            <Button type="primary" className="return-button">返回</Button>

          </div>
      </Card>
    );
  }

}
export default RoleAuthorityAlloc