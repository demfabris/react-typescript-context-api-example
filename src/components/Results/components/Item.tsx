import React, { useState } from 'react'
import { handleAction } from '../hooks'
import { ICarProps, IDialogProps } from '../../../typedefs'
import { useRequest } from '../../../hooks'
import { Dialog } from '../../../components'

const Item: React.FC<ICarProps | null> = ({
    _id,
    title,
    brand,
    price,
    age,
}) => {
    const [dialog, setDialog] = useState<IDialogProps | undefined>(undefined)
    const dispatchRequest = useRequest()

    return (
        <>
            <div id={_id} className="results-item">
                <button className="results-item__edit">
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
                                handleAction(_id, 'DELETE', dispatchRequest),
                        })
                    }
                    className="results-item__delete"
                >
                    <i className="material-icons">remove_circle</i>
                </button>
                <p className="results-item__title">
                    <i>name.</i> {title}
                </p>
                <p className="results-item__brand">
                    <i>brand.</i> {brand}
                </p>
                <p className="results-item__price">
                    <i>price.</i> {price}
                </p>
                <p className="results-item__age">
                    <i>age.</i> {age} years old
                </p>
            </div>
            {dialog && <Dialog {...dialog} />}
        </>
    )
}

export default Item
