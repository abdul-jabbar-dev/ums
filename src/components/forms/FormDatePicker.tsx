'use client'
import dayjs, { Dayjs } from 'dayjs'
import { DatePicker, DatePickerProps, Input, Typography } from "antd"
import { Controller, useFormContext } from "react-hook-form"
const { Text } = Typography
type FormInput = {
    onChange?: (valOne: Dayjs | null, valTwo: string) => void;
    name: string,
    required?: boolean
    size?: 'small' | 'large',
    label?: string,
    value?: Dayjs
}

export default function FormDatePicker({ name, label, onChange, size, required }: FormInput) {
    const { control, setValue } = useFormContext()
    const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
        onChange ? onChange(date, dateString) : null;
        setValue(name, dateString)
    };
    return (
        <>
            {label && label}
            {label && required && <Text style={{ lineHeight: '1' }} type="danger"> *</Text>}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <DatePicker style={{ width: '100%' }} size={size} value={dayjs(field.value) || ""} onChange={handleOnChange} />
                )} />
        </>
    )
}
