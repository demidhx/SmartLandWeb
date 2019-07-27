import React, { Component } from 'react';
import WrappedNormalLoginForm from './NormalLoginForm'
import './login.css';
import Auth from '../auth/Auth'
class Login extends Component {
    render() {
      return (
        <div>
            <div className="login" >
              <div className="login-header">
                <h1 className="h1">智慧耕地保护管理平台</h1>
              </div>
                <div className="login-content">
                    <WrappedNormalLoginForm/>
                </div>
            </div>
        </div>
      );
    }
  }
  export default Login;