import React, { useEffect } from 'react'
import { useRequest } from '../../hooks/' // shorten
import { useDataContext, useLoadingContext } from '../../store'
import { Loading } from '../Loading'

/* import { Form } from '../Form' */
import { Results } from '../Results'

const Center: React.FC = () => {
    const dispatchRequest = useRequest()
    const [, setData] = useDataContext()
    const [{ isLoading }] = useLoadingContext()

    useEffect(() => {
        dispatchRequest({
            url: '/cars',
            method: 'GET',
        }).then((res) => setData({ stale: res, dynamic: res }))
    }, [])

    return (
        <main className="content">{isLoading ? <Loading /> : <Results />}</main>
    )
}

export default Center
