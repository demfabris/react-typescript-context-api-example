type IDebounceFunc = (searchDiv: HTMLElement, resultsDiv: HTMLElement) => void

export const debounceSearch: IDebounceFunc = (searchDiv, resultsDiv) => {
    setTimeout(() => fixUIOnDebounce(searchDiv, resultsDiv), 1500)

    return void 0
}

export const fixUIOnDebounce: IDebounceFunc = (searchDiv, resultsDiv) => {
    resultsDiv.style.display = 'flex'
    searchDiv.style.boxShadow = 'none'

    return void 0
}
