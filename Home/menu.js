import React from 'react';
import {Menu} from 'antd';
import {withRouter,Link} from "react-router-dom";
import Auth from '../auth/Auth';

const SubMenu = Menu.SubMenu;


class Menu1List extends React.Component{
    render(){
      return (
          <div className="menu-div">
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="white"
            >

              <Menu.Item key="1" >
                <Link to='/institution-management'>
                <span>机构管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2" >
                <Link to='/user-management'>
                  <span>用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/role-management'>
                  <span>角色管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/role-authority-allocation'>
                  <span>权限管理</span>
                </Link>
              </Menu.Item>
              {/*<Menu.Item key="5">*/}
              {/*  <Link to='/test11'>*/}
              {/*    <span>数据服务管理</span>*/}
              {/*  </Link>*/}
              {/*</Menu.Item>*/}
              <SubMenu
                key="sub1"
                title={
                  <span>
                <span>日志管理</span>
              </span>
                }
              >
                <Menu.Item key="6" >
                  <Link to='/diary-management-login'>
                    <span>登陆日志管理</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to='/diary-management-do'>
                    <span>操作日志管理</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        )

    }

}
export default withRouter(Menu1List);

/**
 * current 用来存取最近一次访问的2级菜单
 * selectedKeys 用来存取最近一次访问2级菜单的路径
 * defaultOpenKeys 用来存取默认展开一级菜单
 */
// class Menu1List extends React.Component {
//     componentDidMount() {
//         /**实现刷新后保持最后一次点击界面 */
//         const cur = localStorage.getItem('current') ? JSON.parse(localStorage.getItem('current')).path : '';
//         if (cur) {
//             this.props.history.push(cur);
//         }
//     }
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedKeys: [],
//             openKeys: [],
//             current: '',
//         }
//         this.onOpenChange = this.onOpenChange.bind(this);
//         this.menuClick = this.menuClick.bind(this);
//     }
//
//     /**只展开当前父级菜单 */
//     onOpenChange(openKeys) {
//         /**找到当前展开的菜单id */
//         const latestOpenKeys = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
//         /**如果展开当前一级菜单和以前的不一样 */
//         if (this.state.openKeys !== latestOpenKeys) {
//             this.setState({
//                 openKeys: [latestOpenKeys]
//             });
//         }
//     }
//
//     /**点击二级菜单 存取6个访问的二级菜单*/
//     menuClick(event) {
//         const path = event.key;
//         const menuName = event.item.props.children;
//         const menuParent = event.item.props.name;
//         const current = {
//             openKeys: this.state.openKeys,
//             menuName: menuName,
//             menuParent: menuParent,
//             path: path
//         }
//
//         this.props.history.push(path);
//     }
//
//     render() {
//         const menu = [
//             {
//                 id: 1,
//                 title: "dept",
//                 icon: 'boss',
//                 name: '机构管理',
//                 menu2: [
//                     {name: '待测7', id: 7, path: '/institution-management'},
//                     {name: '待测8', id: 8, path: '/user-management'},
//                 ]
//             },
//             {
//                 id: 2,
//                 icon: 'job',
//                 title: "user",
//                 name: '用户管理',
//                 menu2: [
//                     {name: '待测9', id: 9, path: '/role-management'},
//                     {name: '待测10', id: 10, path: '/role-authority-allocation'},
//                 ]
//             },
//             {
//                 id: 3,
//                 icon: 'job',
//                 title: "role",
//                 name: '角色管理',
//                 menu2: [
//                     {name: '待测11', id: 11, path: '/test11'},
//                     {name: '待测12', id: 12, path: '/diary-management-login'},
//                 ]
//             },
//             {
//                 id: 4,
//                 icon: 'job',
//                 title: "auth",
//                 name: '权限管理',
//                 menu2: [
//                     {name: '待测13', id: 13, path: '/diary-management-do'},
//                     {name: '待测14', id: 14, path: '/test14'},
//                 ]
//             },
//             {
//                 id: 5,
//                 icon: 'job',
//                 title: "data",
//                 name: '数据服务管理',
//                 menu2: [
//                     {name: '待测15', id: 15, path: '/test15'},
//                     {name: '待测16', id: 16, path: '/test16'},
//                 ]
//             },
//             {
//                 id: 6,
//                 icon: 'job',
//                 title: "info",
//                 name: '日志管理',
//                 menu2: [
//                     {name: '待测17', id: 17, path: '/test17'},
//                     {name: '待测18', id: 18, path: '/test18'},
//                 ]
//             }
//         ];
//         return (
//             /**判断localStorage中的数据是否存在，存在则渲染菜单，否则渲染验证组件 */
//             <div>
//                 <Menu mode="inline" theme="dark" style={{width: 130}}
//                       onOpenChange={this.onOpenChange}
//                       openKeys={this.state.openKeys}
//                 >
//                     {
//                         menu?menu.map(v => (
//                             <SubMenu style={{backgroundColor: '#333333'}} key={v.id} title={<span style={{marginLeft:'-5px',color:'white',width:'80px',fontWeight:'bold'}}>{v.name}</span>}>
//                                 {
//                                     v.menu2.map(v1 =>
//                                         <Menu.Item key={v1.path} name={v.name} style={{color:'white',fontWeight:'bold'}} onClick={this.menuClick}>{v1.name}</Menu.Item>
//                                     )
//                                 }
//                             </SubMenu>
//                             )):<Auth/>
//                     }
//                 </Menu>
//             </div>
//
//         );
//     }
// }

// export default withRouter(Menu1List);