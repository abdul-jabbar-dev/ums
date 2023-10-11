
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function admin() {
    return (
        <div>
            <Button><Link href={'manage-admin/create'}>Create student</Link></Button>
        </div>
    )
}
