import data from './games.json'

export const getAllGames = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 3000)
    })
}

export const getGamesByPlatform = (plataforma) => {
    const dataFilter = data.filter(d => d.platform.includes(plataforma) )

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataFilter)
        }, 2500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const game = data.find(d => d.id == id)
            resolve(game)
        }, 2000)
    })
}