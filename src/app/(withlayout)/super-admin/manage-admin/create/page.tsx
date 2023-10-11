"use client"
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import FormSelect from '@/components/forms/FormSelect'
import { Button, Col, Row } from 'antd'
import React from 'react'
import { Typography } from 'antd'
import FormFileSelect from '@/components/forms/FormFileSelect'
import FormDatePicker from '@/components/forms/FormDatePicker'
import BLOOD_GROUPS from '@/constance/bloodgroups'
import FormArea from '@/components/forms/FormArea'
export default function CreateAdmin() {
    const { Text } = Typography
    const handleSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <h2>
                Create a Admin
                <div>
                    <Form submitHandler={handleSubmit}>
                        <Text type='secondary' >Admin Information</Text>
                        <div style={{ border: ".3px solid lightgray", padding: '30px 20px', margin: "20px", borderRadius: "10px" }}>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col span={8}><FormInput name='admin.name.firstName' label='First Name' size='large' required /></Col>
                                <Col span={8}><FormInput name='admin.name.middleName' label='Middle Name' size='large' /></Col>
                                <Col span={8}><FormInput name='admin.name.lastName' label='Last Name' size='large' required /></Col>
                            </Row>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                                <Col span={8}>
                                    <FormFileSelect />
                                </Col>
                                <Col span={8}><FormInput name='password' label='Password' type='password' size='large' required /></Col>
                                <Col span={8}><FormSelect label='Gender' name="admin.gender" options={
                                    [{ label: 'Male', value: "Male" }, { label: 'Female', value: "Female" }]
                                } size='large' required />
                                </Col>
                            </Row>

                        </div>
                        <Text type='secondary' >Personal Information</Text>
                        <div style={{ border: ".3px solid lightgray", padding: '30px 20px', margin: "20px", borderRadius: "10px" }}>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col span={8}>
                                    <FormDatePicker name='admin.dateOfBirth' label='Date of Birth' />
                                </Col>
                                <Col span={8}>
                                    <FormInput name='admin.email' label='Email' type='email' size='large' required />
                                </Col>
                                <Col span={8}>
                                    <FormInput name='admin.contactNumber' label='Contact Number' type='text' size='large' required />
                                </Col>
                                <Col span={8}>
                                    <FormInput name='admin.emergencyContactNumber' label='Emergency Contact Number' type='text' size='large' required />
                                </Col>
                                <Col span={8}>
                                    <FormSelect label='Blood Group' name="admin.bloodGroup" options={BLOOD_GROUPS} size='large' required />
                                </Col>
                                <Col span={8}>
                                    <FormInput name='admin.designation' label='Designation' type='text' size='large' required />
                                </Col> 
                                <Col span={12} style={{margin:"20px 0"}}>
                                    <FormArea row={4} name='admin.permanentAddress' label='Permanent address'/>
                                </Col>
                                <Col span={12} style={{ margin: "20px 0" }}>
                                    <FormArea row={4} name='admin.personalAddress' label='Personal address'/>
                                </Col>

                            </Row>

                        </div>
                        <Button type='primary' size='large' htmlType='submit' >Submit</Button>
                    </Form>
                </div>
            </h2 >
        </div >
    )
}
