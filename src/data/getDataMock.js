import data from './MOCK_DATA.json'
export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2500)
    })
}