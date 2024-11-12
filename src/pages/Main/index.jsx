import {useState} from 'react';
import * as Icons from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import navBarConfig from "../../config/navbar.js";
import HeaderComponent from "../../components/Header";
import {RouterAuth} from "../../router/routerAuth.jsx";

const items = navBarConfig.map((itemConfig) => {
    const IconComponent = Icons[itemConfig.icon];
    return {
        key: itemConfig.id,
        icon: IconComponent ? <IconComponent /> : null,
        label: itemConfig.label,
        path: itemConfig.path,
    };
});

const { Sider, Content } = Layout;

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        const selectedItem = items.find(item => item.key === parseInt(e.key, 10));
        if (selectedItem) {
            navigate(selectedItem.path, { replace: true });
        }
    };

    return (
        <RouterAuth>
            <Layout className={"main-container"}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                        onClick={handleMenuClick}
                    />
                </Sider>
                <Layout>
                    <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </RouterAuth>
    );
};

export default Main;
