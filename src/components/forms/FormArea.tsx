'use client'

import { Input, Typography } from "antd"
import { Controller, useFormContext } from "react-hook-form"
const { Text } = Typography
type FormInput = {
    name: string,
    required?: boolean
    size?: 'small' | 'large',
    id?: string,
    value?: string | string[] | undefined,
    placeholder?: string,
    label?: string, row?: number,
    maxLength?: number
}

export default function FormArea({ name, id, label, placeholder, size, value, required, row, maxLength }: FormInput) {
    const { control } = useFormContext()
    return (
        <>
            {label && label}
            {label && required && <Text style={{ lineHeight: '1' }} type="danger"> *</Text>}
            <Controller
                control={control}

                name={name}
                render={({ field }) => (
                    <Input.TextArea
                        rows={row}
                        maxLength={maxLength}
                        {...field}
                        required={required}
                        id={id}
                        size={size}
                        placeholder={placeholder}
                        value={value ? value : field.value}
                    />
                )} />
        </>
    )
}
