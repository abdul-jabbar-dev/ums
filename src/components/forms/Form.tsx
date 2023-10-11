'use client'
import { ReactElement, ReactNode } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

type FormConfig = {
    defaultValues?: Record<string, any>
}
type FormProps = {
    children?: ReactElement | ReactNode,
    submitHandler: SubmitHandler<any>
} & FormConfig
export default function Form({ children, submitHandler, defaultValues }: FormProps) {
    const formConfig: FormConfig = {}
    if (!!defaultValues) formConfig['defaultValues'] = defaultValues

    const methods = useForm<FormConfig>(formConfig)

    const onSubmit = (data: any) => {
        submitHandler(data)
        methods.reset()
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
