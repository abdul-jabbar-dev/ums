'use client'

import { Input, Typography } from "antd"
import { Controller, useFormContext } from "react-hook-form"
const { Text } = Typography
type FormInput = {
    name: string,
    required?: boolean
    type?: string,
    size?: 'small' | 'large',
    id?: string,
    value?: string | string[] | undefined,
    placeholder?: string,
    label?: string,
    validation?: any
}

export default function FormInput({ name, type = 'text', id, label, placeholder, size, validation, value, required }: FormInput) {
    const { control } = useFormContext()
    return (
        <>
            {label && label}
            {label && required && <Text style={{lineHeight:'1'}} type="danger"> *</Text>}
            <Controller
                control={control}

                name={name}
                render={({ field }) => (
                    type === 'password' ?
                        <Input.Password
                            {...field}
                            type={type}
                            id={id}
                            size={size}
                            required={required}
                            placeholder={placeholder}
                            value={value ? value : field.value}
                        /> : <Input
                            {...field}
                            required={required}
                            type={type}
                            id={id}
                            size={size}
                            placeholder={placeholder}
                            value={value ? value : field.value}
                        />
                )} />
        </>
    )
}
