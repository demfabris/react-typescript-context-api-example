import { ICarProps } from '../../../typedefs'
import { ChangeEvent } from 'react'

type State = {
    stale: ICarProps[] | undefined
    dynamic: ICarProps[] | undefined
}

type DebounceT = (
    ev: ChangeEvent<HTMLInputElement>,
    stale: ICarProps[] | undefined,
    setData: (newValue: State) => void
) => void

const handleSearch: DebounceT = (ev, stale, setData) => {
    //parsing input query to lowercase to improve experience
    const query = ev.target.value.toLowerCase()
    const result = stale?.filter((item) => {
        return (
            item.title.toLowerCase().includes(query) ||
            item.brand.toLowerCase().includes(query)
        )
    })
    setData({ stale, dynamic: result })
}

export default handleSearch
