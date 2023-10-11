import React, { useState } from 'react'
import { Avatar, Button, Dropdown, Layout, MenuProps, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { getUserInfo, userLogout } from '@/service/auth.service'
import { useRouter } from 'next/navigation'
import ConfirmPopup from '../popup/ConfirmPopup'
const { Header: AntHeader } = Layout
export default function Header() {
    const router = useRouter()

    const confirm = () => {
        const isLogout = userLogout()
        if (isLogout) {
            router.push('/login')
        }
    }
    const getUser = getUserInfo() as any
    const items: MenuProps['items'] = [
        { key: 'logout', label: <span><ConfirmPopup confirm={confirm}><Button danger>logout</Button></ConfirmPopup></span> }
    ]
    return (
        <AntHeader style={{ color: 'white', backgroundColor: "" }}>
            <Row align='middle' justify={'end'}>
                <h3>{getUser.role}</h3> <br />
                <span >
                    <Dropdown menu={{ items }}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Dropdown>
                </span>
            </Row>
        </AntHeader>
    )
}
