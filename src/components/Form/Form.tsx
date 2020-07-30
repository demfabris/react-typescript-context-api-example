import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUIContext } from '../../store'
import { FormField } from './components'
import { useRequest, handleAction } from '../../hooks'
import { ICarProps } from 'typedefs'

const Form = () => {
    const [{ form, edit }] = useUIContext()
    const [editData, setEditData] = useState<ICarProps | undefined>(undefined)
    const dispatchRequest = useRequest()
    const { handleSubmit, register, errors } = useForm()

    const onSubmit = (data: ICarProps) => {
        console.log(edit)
        edit
            ? handleAction('PUT', dispatchRequest, edit._id, data)
            : handleAction('POST', dispatchRequest, undefined, data)
    }

    useEffect(() => {
        //this must be done to chain edit buttons
        edit ? setEditData(edit) : setEditData(undefined)
    }, [edit])

    return form ? (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <FormField
                label={'name.'}
                name={'title'}
                register={register}
                errors={errors}
                defaultValue={editData?.title}
            />
            <FormField
                label={'brand.'}
                name={'brand'}
                register={register}
                errors={errors}
                defaultValue={editData?.brand}
            />
            <FormField
                label={'price.'}
                name={'price'}
                register={register}
                errors={errors}
                defaultValue={editData?.price}
            />
            <FormField
                label={'age.'}
                name={'age'}
                register={register}
                errors={errors}
                defaultValue={editData?.age}
            />
            <button className="form__btn">
                <i className="material-icons">launch</i>
                <p className="form__btn-text">Submit</p>
            </button>
        </form>
    ) : null
}

export default Form
