import data from './games.json'
export const getAllGames = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2500)
    })
}

export const getGamesByPlatform = (platform, limit=5) => {
    const dataFilter = data.filter(d => d.platform.includes(platform)).slice(0, limit)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataFilter)
        }, 2500)
    })
}