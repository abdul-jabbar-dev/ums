'use client'  
import { sidebarItems } from '@/constance/sliderItems';
import { getUserInfo } from '@/service/auth.service';

import { Layout, Menu, theme } from 'antd';


import React, { useState } from 'react'


const { Sider } = Layout

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const {role} = getUserInfo() as  any
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <h2 style={{color:"white"}}>UMS</h2>
            <div className="demo-logo-vertical" />
            <Menu  theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
        </Sider>
    )
}
