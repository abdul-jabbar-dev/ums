import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function app() { 
  return (
    <div>
      <Button><Link href={'manage-student/create'}>Create student</Link></Button>
    </div>
  )
}
