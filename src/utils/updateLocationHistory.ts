export const updateLocationHistory = (list: string[]) => {
    const urlParts = [...list]
    const url = urlParts.join('/')
    window.history.pushState(null, document.title, `/${url}` || '/')
}
