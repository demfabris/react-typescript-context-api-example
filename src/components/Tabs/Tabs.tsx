import React from 'react'
import { useUIContext } from 'store'

const Tabs: React.FC = () => {
    const [UIState, setUIState] = useUIContext()
    const isFormPopped = !!UIState.form

    return (
        <ul className="tabs">
            <li className="tabs__item">
                <button
                    onClick={() =>
                        setUIState({
                            ...UIState,
                            form: !UIState.form,
                            edit: undefined,
                        })
                    }
                    className="tabs__item-btn"
                >
                    <i className="material-icons">
                        {isFormPopped ? 'replay' : 'add_circle'}
                    </i>
                    <p className="tabs__item-text">
                        {isFormPopped ? 'Never mind' : 'Add new car'}
                    </p>
                </button>
            </li>
        </ul>
    )
}

export default Tabs
