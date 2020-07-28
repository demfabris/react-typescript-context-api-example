import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RootProvider } from './store'

import './assets'

import { Main } from './pages'

const App: React.FC = () => {
    return (
        <RootProvider>
            <Router>
                <Route exact path="/">
                    <Main />
                </Route>
            </Router>
        </RootProvider>
    )
}

export default App
