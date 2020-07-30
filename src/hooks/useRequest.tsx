import { baseUrl } from 'constants/apiConfig'
import { useLoadingContext } from 'store'
import { RequestInstanceT } from 'typedefs'

export const useRequest = () => {
    const [, setLoading] = useLoadingContext()

    const requestInstance: RequestInstanceT = async (requestProps) => {
        const { url } = requestProps
        setLoading({ isLoading: true })
        try {
            const response = await fetch(baseUrl + url, requestProps)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        } catch (error) {
            if (!!error.message.includes('Failed to fetch')) {
                alert(
                    'Could not reach server, check if API is alive or its address changed'
                )
                window.location.reload()
            } else {
                return Promise.reject(error)
            }
        } finally {
            setLoading({ isLoading: false })
        }
    }

    return requestInstance
}
