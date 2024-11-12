import React from 'react';
import { Button, Input, Form, Typography, message } from 'antd';
import axios from 'axios';
import config from '../../config/serverConfig.js'; // Assuming serverConfig includes the server URL
import resetStyle from './ResetPassword.module.css';
import {useNavigate} from "react-router-dom";

const { Title } = Typography;

const ResetPassword = () => {
    const navigate = useNavigate();

    const handleReset = async (values) => {
        const { id, newPassword, confirmPassword } = values;

        if (newPassword !== confirmPassword) {
            message.error('两次密码输入不一致');
            return;
        }

        const payload = JSON.stringify({ id, password: newPassword });

        try {
            const response = await axios.put(`${config.serverURL}/reset`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                message.success('修改密码成功');
                navigate("/login")
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                message.error('该账号id不存在');
            } else {
                message.error('服务器端发生错误');
            }
        }
    };

    return (
        <div className={resetStyle['reset-container']}>
            <img src="../../../public/sys.png" alt="Logo" className={resetStyle.logo} />
            <Title level={2} className={resetStyle['reset-title']}>稳定社群影响力动态评估系统</Title>
            <Title level={3} className={resetStyle['reset-subtitle']}>密码重置</Title>
            <Form
                name="resetPassword"
                className={resetStyle['reset-form']}
                onFinish={handleReset}
            >
                <Form.Item
                    name="id"
                    rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder="账号" />
                </Form.Item>
                <Form.Item
                    name="newPassword"
                    rules={[{ required: true, message: '请输入新密码' }]}
                >
                    <Input.Password placeholder="新密码" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    rules={[{ required: true, message: '请确认新密码' }]}
                >
                    <Input.Password placeholder="确认新密码" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={resetStyle['reset-button']}>
                        重置
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ResetPassword;
