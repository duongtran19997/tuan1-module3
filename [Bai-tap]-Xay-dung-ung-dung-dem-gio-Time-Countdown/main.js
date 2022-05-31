function countTime(t) {
    waiting(t).then(
        resolve =>{
            console.log(resolve);
        }
    ).catch(err =>{
        console.log(err.message)
    })
}

function waiting(i) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
                if (i <= 0) {
                    reject(new Error('count done'))
                } else {
                    console.log(i)
                    i--
                    resolve(waiting(i))
                }
            }
            , 1000 )
    }))
}
countTime(5)