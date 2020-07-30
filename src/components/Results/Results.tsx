import React from 'react'
import { useDataContext } from 'store'

import { Item } from './components'

const Results: React.FC = () => {
    const [{ dynamic }] = useDataContext()

    return (
        <>
            <div id="results" className="results">
                {dynamic?.map(
                    ({ _id, title, brand, price, age }, idx: number) => (
                        <Item
                            key={idx}
                            _id={_id}
                            title={title}
                            brand={brand}
                            price={price}
                            age={age}
                        />
                    )
                )}
            </div>
            {!dynamic?.length && (
                <h1 className="empty">There's nothing to show</h1>
            )}
        </>
    )
}

export default Results
