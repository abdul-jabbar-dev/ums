"use client"
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import loginImage from '../../assets/login.svg'
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import { SubmitHandler } from 'react-hook-form';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { storeUserInfo, userLogin } from '@/service/auth.service';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
type LoginFormValues = { id: string, password: string }
export default function Page() {

    const [loginUser] = useUserLoginMutation();
    const navigation = useRouter()
    const [loading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        if (userLogin()) {
            navigation.push('/profile')
        }
        setIsLoading(false)
    }, [navigation])
    const onSubmit: SubmitHandler<LoginFormValues> = async (data: LoginFormValues) => {
        try {
            const res = await loginUser({ ...data }).unwrap()
            console.log(res)
            storeUserInfo({ accessToken: res.accessToken })
            if (userLogin()) {
                navigation.push('/profile')
            }
        } catch (error) {
            console.log(error);
        }
    }
    if (loading) {
        return 'Loading...'
    } else
        return (
            <div style={{ maxHeight: '100vh', height: "100vh" }}>
                <Row style={{ height: "100%" }}>
                    <Col sm={8} md={12} lg={16} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                        <Image width={600} style={{ width: "100%" }} alt='Login image' src={loginImage} />
                    </Col>
                    <Col sm={16} md={12} lg={8} style={{ display: 'flex', alignItems: 'center' }} >
                        <div style={{ padding: '10px 30px' }}>
                            <h2 style={{ margin: "24px 0" }}>Login Student</h2>
                            <Form submitHandler={onSubmit}>
                                <FormInput name='id' label='Student ID' /><br /><br />
                                <FormInput type='password' label='Student Password' name='password' />
                                <Button style={{ margin: "20px auto" }} type='primary' htmlType='submit'>Login</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
}
