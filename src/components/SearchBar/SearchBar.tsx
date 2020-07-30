import React from 'react'
import { useUIContext, useDataContext } from 'store'
import { handleSearch } from './hooks'

const SearchBar: React.FC = () => {
    const [UIState, setUIState] = useUIContext()
    const [{ stale }, setData] = useDataContext()

    return (
        <div className="searchbar">
            <input
                placeholder="Search for name or brand..."
                type="text"
                id="searchbar"
                className="searchbar__input"
                onChange={(ev) => handleSearch(ev, stale, setData)}
                onFocus={() =>
                    setUIState({
                        ...UIState,
                        name: 'search',
                        previousName: UIState.name,
                    })
                }
                onBlur={() =>
                    setUIState({
                        ...UIState,
                        name: UIState.previousName,
                    })
                }
            />
        </div>
    )
}

export default SearchBar
