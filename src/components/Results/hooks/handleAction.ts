import { RequestInstanceT } from '../../../typedefs'

type ActionT = (
    itemID: string,
    action: 'DELETE' | 'ADD',
    requestDispatcher: RequestInstanceT
) => void

//dispatch action

export const handleAction: ActionT = (itemID, action, requestDispatcher) => {
    requestDispatcher({
        url: `/cars/${itemID}`,
        method: action,
    }).then(() => {
        alert('You just removed a car :(')
        window.location.reload()
    })
}
