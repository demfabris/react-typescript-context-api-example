import { RequestInstanceT, ICarProps } from '../typedefs'

type ActionT = (
    method: 'DELETE' | 'POST' | 'PUT',
    requestDispatcher: RequestInstanceT,
    itemID?: string,
    data?: ICarProps
) => void

//dispatch action

export const handleAction: ActionT = (
    method,
    requestDispatcher,
    itemID,
    data
) => {
    const fixedData = fixAgeType(data as ICarProps)
    requestDispatcher({
        url: `/cars${itemID ? '/' + itemID : ''}`,
        method,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(fixedData),
    })
        .then(() => {
            method === 'DELETE' && alert('You just removed a car :(')
            method === 'POST' && alert('You just added a new car :)')
            method === 'PUT' && alert('You just edited that car :)')
            window.location.reload()
        })
        .catch((err) => {
            if (!!err.message.includes('Bad Request')) {
                alert('Bad request, check your inputs!')
                window.location.reload()
            }
        })
}

const fixAgeType = (data: ICarProps): ICarProps => {
    if (data) {
        const newData = data
        newData.age = Number(data.age)

        return newData
    } else {
        return data
    }
}
