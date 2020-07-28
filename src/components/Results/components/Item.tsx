import React from 'react'
import { handleAction } from '../hooks'
import { ICarProps } from 'typedefs'
import { useRequest } from '../../../hooks'

const Item: React.FC<ICarProps | null> = ({
    _id,
    title,
    brand,
    price,
    age,
}) => {
    const dipatchRequest = useRequest()

    return (
        <div id={_id} className="results-item">
            <button className="results-item__edit">
                <i className="material-icons">edit</i>
            </button>
            <button
                onClick={() => handleAction(_id, 'delete', dipatchRequest)}
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
    )
}

export default Item
