import { ICarProps } from 'typedefs'

interface IRequestProps {
    url: string | null
    method: string
    headers?: any
    body?: any
}

type Response = ICarProps[] | undefined
export type RequestInstanceT = (
    requestProps: IRequestProps
) => Promise<Response>
