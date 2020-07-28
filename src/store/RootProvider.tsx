import React from 'react'
import { DataContextProvider } from './appData'
import { UIContextProvider } from './sectionTitle'
import { LoadingContextProvider } from './loadingState'

type ProviderProps = {
    children: React.ReactNode
}

export const RootProvider = ({ children }: ProviderProps) => {
    return (
        <LoadingContextProvider>
            <DataContextProvider>
                <UIContextProvider>{children}</UIContextProvider>
            </DataContextProvider>
        </LoadingContextProvider>
    )
}
