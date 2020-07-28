import React from 'react'

const Tabs: React.FC = () => {
    return (
        <ul className="tabs">
            <li className="tabs__item">
                <button className="tabs__item-btn">
                    <i className="material-icons">add_circle</i>
                    <p className="tabs__item-text">Add new car</p>
                </button>
            </li>
        </ul>
    )
}

export default Tabs
