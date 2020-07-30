import React from 'react'
import * as components from 'components'

import './Main.scss'

const Main: React.FC = () => {
    return (
        <section className="application">
            <components.Header />
            <div className="wrap-as-row">
                <components.SearchBar />
                <components.Tabs />
            </div>
            <components.Form />
            <components.Center />
        </section>
    )
}

export default Main
