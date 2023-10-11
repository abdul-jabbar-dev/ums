import { Button, Popconfirm } from 'antd'
import React from 'react'

export default function ConfirmPopup({ confirm, children }: { confirm: () => any, children: React.ReactNode }) {
    return (
        <Popconfirm
            title="Confirm logout"
            description="Are you sure to logout your account?"
            onConfirm={confirm}
            onOpenChange={() => console.log('Logout successfully')}
        >
            {children}
        </Popconfirm>
    )
}
