import React, { Component } from 'react';
import './home.css';
import Top from './top';
import Left from './left';
import Right from './right';
import { Layout } from 'antd';

const { Header,Sider, Content } = Layout;
class Home extends Component {
    /**登出时，使登陆背景动图显示 */
    render() {
        const userName = "管理员"
        const userId = "1"
        return (

          <Layout style={{height:'100%' }}>
          <Header><Top userId={userId} userName={userName}/></Header>
      <Layout>
        <Sider><Left /></Sider>
        <Content><Right /></Content>
      </Layout>
    </Layout>
        );
    }
} 
export default Home;