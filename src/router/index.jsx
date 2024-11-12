import {createBrowserRouter, Navigate} from "react-router-dom";

import Home from "../pages/Home/index.jsx";
import UserManagement from "../pages/User/index.jsx";
import LevelManage from "../pages/Level/level.jsx";
import AchievementManage from "../pages/Achievement/index.jsx";
import Login from "../pages/Login/index.jsx";
import ResetPassword from "../pages/ResetPassword/index.jsx";
import {lazy, Suspense} from "react";
import {Provider} from "react-redux";
import Main from "../pages/Main/index.jsx";
import store from "../redux/store.js";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path:"/",
                element: <Navigate to={"/home"} replace/>
            },
            //各功能模块功能
            {
                path:"/home",
                element: <Home/>
            },
            {
                path:"/user",
                element: <UserManagement/>
            },
            {
                path:"/level",
                element: <LevelManage/>
            },
            {
                path:"/achievements",
                element: <AchievementManage/>
            }
        ]
    }, {
        path: "/login",
        element: <Login/>
    },{
        path: "/reset",
        element: <ResetPassword/>
    }
])

export default router;