function checkPrice(price) {
    let toyota = 10000
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (price >= toyota) {
                resolve(`${price} is enough to buy car`)
            } else {
                reject(new Error(`${price} maybe enough to buy four car tires`))
            }
        }, 2000)
    }))
}

function compare(price) {
    checkPrice(price).then(
        resolve => {
            console.log(resolve)
        }
    ).catch(err => {
        console.log(err.message)
    })
}
compare(10000)