import React, {Component} from 'react';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import { Avatar, Space, Dropdown } from 'antd';

const items = [
    {
        key: '1',
        label: '用户中心',
    },
    {
        key: '2',
        danger: true,
        label: '退出登录',
    },
];

class UserIcon extends Component {
    render() {
        return (
            <div>
                <Avatar icon={<UserOutlined />} />
                <Dropdown menu={{items}}>
                    <DownOutlined />
                </Dropdown>
            </div>
        );
    }
}

export default UserIcon;