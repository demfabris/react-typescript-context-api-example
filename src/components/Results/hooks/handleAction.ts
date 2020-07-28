import { RequestInstanceT } from '../../../typedefs'

type ActionT = (
    itemID: string,
    action: 'delete' | 'add',
    requestDispatcher: RequestInstanceT
) => void

//IMPLEMENTAR DELETE E ADD

export const handleAction: ActionT = (itemID, action, requestDispatcher) => {
    console.log(itemID)
    console.log(action)
    console.log(requestDispatcher)
    requestDispatcher({
        url: `/cars/${itemID}`,
        method: 'DELETE',
    }).then((x) => console.log(x))
}
