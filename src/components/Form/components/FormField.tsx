import React from 'react'

type FormProps = {
    label: string
    name: string
    register: any // react hook form typing is horrific
    errors: any
    defaultValue?: string | number
}

const FormField: React.FC<FormProps> = ({
    label,
    name,
    register,
    errors,
    defaultValue,
}) => {
    return (
        <div className="form__inputwrap">
            <label
                className={`form__title ${
                    errors[name] ? 'form__title--errored' : ''
                }`}
                htmlFor={name}
            >
                <i>{label}</i>
            </label>
            <input
                className={`form__input ${
                    errors[name] ? 'form__input--errored' : ''
                }`}
                type="text"
                name={name}
                id={name}
                ref={register({ required: true })}
                defaultValue={defaultValue}
            />
            {errors[name] && (
                <p className="form__errorlabel">This field is required</p>
            )}
        </div>
    )
}

export default FormField
