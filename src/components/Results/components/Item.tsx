import React, { useState } from 'react'
import { handleAction } from '../../../hooks'
import { ICarProps, IDialogProps } from '../../../typedefs'
import { useUIContext } from '../../../store'
import { useRequest } from '../../../hooks'
import { Dialog } from '../../../components'
import { parseAge } from './fixes'

const Item: React.FC<ICarProps | null> = ({
    _id,
    title,
    brand,
    price,
    age,
}) => {
    const [dialog, setDialog] = useState<IDialogProps | undefined>(undefined)
    const dispatchRequest = useRequest()
    const [UIState, setUIState] = useUIContext()

    return (
        <>
            <div id={_id} className="results-item">
                <button
                    onClick={() => {
                        setUIState({
                            ...UIState,
                            form: true,
                            edit: {
                                _id,
                                title,
                                brand,
                                price,
                                age: parseAge(age),
                            },
                        })
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        })
                    }}
                    className="results-item__edit"
                >
                    <i className="material-icons">edit</i>
                </button>
                <button
                    onClick={() =>
                        setDialog({
                            title: 'Remove item',
                            text: `Are you sure you wish to remove a beautiful car like ${title}?`,
                            cancelText: 'Never mind',
                            continueText: 'Continue',
                            handleCancel: () => setDialog(undefined),
                            handleContinue: () =>
                                handleAction('DELETE', dispatchRequest, _id),
                        })
                    }
                    className="results-item__delete"
                >
                    <i className="material-icons">remove_circle</i>
                </button>
                <p title={title} className="results-item__title">
                    <i>name.</i> {title}
                </p>
                <p className="results-item__brand">
                    <i>brand.</i> {brand}
                </p>
                <p className="results-item__price">
                    <i>price.</i>&nbsp;&nbsp;
                    {Number(price).toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </p>
                <p className="results-item__age">
                    <i>age.</i>&nbsp;&nbsp;&nbsp;{parseAge(age)}{' '}
                    <b>years old</b>
                </p>
            </div>
            {dialog && <Dialog {...dialog} />}
        </>
    )
}

export default Item
