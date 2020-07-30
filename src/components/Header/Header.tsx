import React from 'react'
import { UIContext } from 'store'

const Header: React.FC = () => {
    return (
        <UIContext.Consumer>
            {([{ name }]) => (
                <header className="header">
                    <h1 className="header__title">
                        I {name} <b>cars</b>.
                    </h1>
                </header>
            )}
        </UIContext.Consumer>
    )
}

export default Header
