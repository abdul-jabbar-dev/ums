"use client"
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import { Button, Col, Row } from 'antd'
import React from 'react'

export default function CreateStudent() {
    const handleSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <h2>
                Create a student
                <div>
                    <Form submitHandler={handleSubmit}>
                        <div style={{ border: ".3px solid lightgray", padding: '10px', borderRadius: "10px" }}>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col span={8}><FormInput name='name.firstName' label='First Name' size='large' required /></Col>
                                <Col span={8}><FormInput name='name.middleName' label='Middle Name' size='large' /></Col>
                                <Col span={8}><FormInput name='name.lastName' label='Last Name' size='large' required /></Col>
                            </Row>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col span={8}><FormInput name='password' label='Password' type='password' size='large' required /></Col>
                            </Row>

                        </div>
                        <Button type='primary' htmlType='submit' >Submit</Button>
                    </Form>
                </div>
            </h2>
        </div>
    )
}
