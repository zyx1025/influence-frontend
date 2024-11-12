import React from 'react';
import { Button, Layout, theme,Dropdown, Space } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined,DownOutlined, SmileOutlined } from '@ant-design/icons';
import UserIcon from "../../components/UserIcon/index.jsx";
import "./index.css"

const { Header } = Layout;

const HeaderComponent = ({ collapsed, setCollapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
        <Header className={"header-container"}
            style={{
                background: colorBgContainer,
            }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            <p className={"app-name login-title"}>系统名称</p>
            <UserIcon />
        </Header>
        </>
    );
};

export default HeaderComponent;
