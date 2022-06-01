function checkPrice(price) {
    let toyota = 10000;
    let mercedesPrice = 60000;
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (price >= toyota&& price<mercedesPrice) {
                resolve(`${price} is enough to buy car`)
            } else if(price>= mercedesPrice){
                resolve(`${price} is enough to buy mercedes`)
            }
            else {
                reject(new Error(`${price} maybe enough to buy four car tires`))
            }
        }, 2000)
    }))
}

function compare(price) {
    checkPrice(price)
        .then(
        resolve => {
            console.log(resolve)
        }
    )
        .catch(err => {
        console.log(err.message)
    })
}
compare(1000)