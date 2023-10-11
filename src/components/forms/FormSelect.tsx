'use client'

import { Input, Select, Typography } from "antd"
import { Controller, useFormContext } from "react-hook-form"
const { Text } = Typography
type FormSelectOptions = {
    label: string,
    value: string
}
type FormInput = {
    name: string,
    required?: boolean
    size?: 'small' | 'large',
    id?: string,
    label?: string,
    defaultValue?: string,
    validation?: any,
    options: FormSelectOptions[];
}

export default function FormSelect({ name, id, label, size, required, options, defaultValue }: FormInput) {
    const { control } = useFormContext()
    return (
        <>
            {label && label}
            {label && required && <Text style={{ lineHeight: '1' }} type="danger"> *</Text>}
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue}
                render={({ field }) => (<Select
                    id={id}
                    value={field.value}
                    size={size}
                    onChange={field.onChange}
                    options={options}
                    style={{ width: "100%" }}
                    placeholder={'Select'}
                />)} />
        </>
    )
}
