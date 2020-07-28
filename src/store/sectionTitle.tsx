import React, { createContext, useContext, useState } from 'react'

type State = {
    name: string
}

type StateGetSet = [State, React.Dispatch<React.SetStateAction<State>>]

type SetNewState = (newValue: State) => void

type ContextHookT = [State, SetNewState]

type ContextProviderProps = {
    children: React.ReactNode
}

const initialState: State = {
    name: 'list',
}

export const UIContext = createContext<StateGetSet | undefined>(undefined)

export const UIContextProvider = ({ children }: ContextProviderProps) => {
    const StateGetSet = useState(initialState)
    return (
        <UIContext.Provider value={StateGetSet}>{children}</UIContext.Provider>
    )
}

export const useUIContext = (): ContextHookT => {
    const [state, setState] = useContext(UIContext) as StateGetSet
    const setNewState = (newValue: State) => {
        setState({ ...state, ...newValue })
    }

    return [state, setNewState]
}
