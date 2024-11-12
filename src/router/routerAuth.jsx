import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

export const RouterAuth = ({ children }) => {
    const token = localStorage.getItem("token"); // 从本地存储中获取 token
    const location = useLocation(); // 获取当前路径
    console.log(location.pathname + " " + token);
    if (token && location.pathname === '/login') {
        // 如果用户已登录并访问 /login，则重定向到 /home
        return <Navigate to="/home" replace />;
    }

    if (!token && location.pathname !== '/login' && location.pathname !== '/reset') {
        // 如果用户未登录且访问非 /login 或 /reset 页面，则重定向到 /login
        return <Navigate to="/login" replace />;
    }

    return children;
};
