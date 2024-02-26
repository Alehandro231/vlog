export const updateLocationHistory = (list: string[]) => {
    const urlParts = [...list]
    urlParts.shift()
    const queryParams = urlParts.join('/')
    const query = queryParams ? `?s=${queryParams}` : ''
    const url = `${process.env.PUBLIC_URL}${query}`
    window.history.pushState(null, document.title, `${url}` || '/')
}
