import React from 'react';
import {Button, Input, Form, Typography, message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config/serverConfig.js';
import loginStyle from './Login.module.css';
import axios from 'axios';

const { Title } = Typography;

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (values) => {
        const { id, password } = values;

        axios.post(`${config.serverURL}/login`, { id, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                // Store token in localStorage and navigate to /home
                const { token } = response.data;
                localStorage.setItem('token', token);
                navigate('/home');

            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    message.error('输入的账号或密码有误');
                } else {
                    message.error('服务器端发生错误');
                }
            });
    };

    return (
        <div className={loginStyle['login-container']}>
            <img src="../../../public/sys.png" alt="Logo" className={loginStyle.logo} />
            <Title level={2} className={loginStyle['login-title']}>稳定社群影响力动态评估系统</Title>
            <Form
                name="login"
                className={loginStyle['login-form']}
                onFinish={handleLogin}
            >
                <Form.Item
                    name="id"
                    rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder="账号" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder="密码" />
                </Form.Item>
                <Link to="/reset" className={loginStyle['reset-password-link']}>
                    重置密码
                </Link>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={loginStyle['login-button']}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
