export type IDialogProps = {
    title: string
    text: string
    cancelText: string
    continueText: string
    handleCancel: () => void
    handleContinue: () => void
}
