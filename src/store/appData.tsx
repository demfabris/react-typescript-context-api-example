import React, { createContext, useContext, useState } from 'react'
import { ICarProps } from '../typedefs'

type State = {
    stale: ICarProps[] | undefined
    dynamic: ICarProps[] | undefined
}

type StateGetSet = [State, React.Dispatch<React.SetStateAction<State>>]

type ContextProviderProps = {
    children: React.ReactNode
}

type SetNewState = (newValue: State) => void
type ContextHookT = [State, SetNewState]

const initialState: State = {
    stale: [],
    dynamic: [],
}

export const DataContext = createContext<StateGetSet | undefined>(undefined)

export const DataContextProvider = ({ children }: ContextProviderProps) => {
    const StateGetSet = useState(initialState)
    return (
        <DataContext.Provider value={StateGetSet}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = (): ContextHookT => {
    const [state, setState] = useContext(DataContext) as StateGetSet
    const setNewState = (newValue: State) => {
        setState({ ...state, ...newValue })
    }

    return [state, setNewState]
}
