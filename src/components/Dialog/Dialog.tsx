import React from 'react'
import { Modal } from './Modal'
import { IDialogProps } from 'typedefs'

const Dialog: React.FC<IDialogProps> = (props) => {
    const {
        title,
        text,
        cancelText,
        continueText,
        handleCancel,
        handleContinue,
    } = props
    return (
        <Modal>
            <div className="overlay">
                <div className="dialog">
                    <h1 className="dialog__title">{title}</h1>
                    <p className="dialog__text">{text}</p>
                    <div className="dialog__buttonwrap">
                        <button
                            onClick={() => handleCancel()}
                            className="dialog__btn dialog__btn--cancel"
                        >
                            {cancelText}
                        </button>
                        <button
                            onClick={() => handleContinue()}
                            className="dialog__btn dialog__btn--continue"
                        >
                            {continueText}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Dialog
