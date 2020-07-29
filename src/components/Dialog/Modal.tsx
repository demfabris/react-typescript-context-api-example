import ReactDOM from 'react-dom'

type PortalProps = {
    children: React.ReactNode
}

export const Modal = ({ children }: PortalProps): React.ReactPortal => {
    const portalRoot = document.querySelector('#portal') as Element
    return ReactDOM.createPortal(children, portalRoot)
}
