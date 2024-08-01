export const fetchRandomNumApi = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 10))
        }, 2000)
    })