import React, { ChangeEvent } from 'react'
import { useUIContext, useDataContext } from '../../store'

const SearchBar: React.FC = () => {
    const [, setSectionTitle] = useUIContext()
    const [{ stale }, setData] = useDataContext()

    const handleSearch = (ev: ChangeEvent<HTMLInputElement>): void => {
        const query = ev.target.value.toLowerCase()
        const result = stale?.filter((item) => {
            return (
                item.title.toLowerCase().includes(query) ||
                item.brand.toLowerCase().includes(query)
            )
        })
        setData({ stale, dynamic: result })
    }

    /* const clearResults = (setState: typeof setData): void => { */
    /*     setState({ stale, dynamic: stale }) */
    /* } */

    return (
        <div className="searchbar">
            <input
                placeholder="Search for title or brand..."
                type="text"
                id="searchbar"
                className="searchbar__input"
                onChange={(ev) => handleSearch(ev)}
                onFocus={() => setSectionTitle({ name: 'search' })}
                onBlur={() => setSectionTitle({ name: 'list' })}
            />
        </div>
    )
}

export default SearchBar
