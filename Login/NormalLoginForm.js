import React from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
// import reqwest from 'reqwest';
import { Form, Icon, Input, Button, Checkbox,Row, Col,message } from 'antd/lib';
import './NormalLoginForm';

const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
  constructor(props) { //构造函数
    super(props);
    this.state = {
    user:'',
    password:'',
    }
    this.userChange = this.userChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  userChange(e){
    this.setState({ user : e.target.value })
    } 
  passwordChange(e){
    this.setState({ password : e.target.value })
    }
  /** */
  keyPress(e){
    if(e.keyCode == 13){
      alert('1111')
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
      }
    });
    const history = this.props.history;
    history.push({pathname:'/home'});

}
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h2 className="h2">用户登陆</h2>
        <Form onSubmit={this.handleSubmit} className="login-form" onKeyPress={this.keyPress}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' } }/>} placeholder="请输入用户名!" onChange={this.userChange} />

              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码!" onChange={this.passwordChange} />
            )}
          </FormItem>
          <FormItem>
            <Row>
              <Col span={8}>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
              </Col>
              <Col span={7} offset={9}>
                <abbr className="login-form-forgot" title="请联系管理员重置密码">忘记密码？</abbr>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit" className="login-form-button"  block  >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>

    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default withRouter(WrappedNormalLoginForm);