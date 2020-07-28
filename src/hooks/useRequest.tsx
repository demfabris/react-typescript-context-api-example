import { baseUrl } from '../constants/apiConfig'
import { useLoadingContext } from '../store'
import { RequestInstanceT } from '../typedefs'

function useRequest() {
    const [, setLoading] = useLoadingContext()

    const requestInstance: RequestInstanceT = async (requestProps) => {
        const { url } = requestProps
        try {
            const response = await fetch(baseUrl + url, requestProps)
            return response.json()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading({ isLoading: false })
        }
    }

    return requestInstance
}

export default useRequest
