import { ICarProps } from './carprops'

interface IRequestProps {
    url: string | null
    method: string
    headers?: {}
    data?: {}
}

type Response = ICarProps[] | undefined
export type RequestInstanceT = (
    requestProps: IRequestProps
) => Promise<Response>
