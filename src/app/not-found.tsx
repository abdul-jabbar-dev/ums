"use client"
import React from 'react';
import { Button, Result } from 'antd';
import { useRouter } from 'next/navigation';

const App: React.FC = () => {
    const route = useRouter()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={() => route.back()}>Back Home</Button>}
        />
    )
};

export default App;