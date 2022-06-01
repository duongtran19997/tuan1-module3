function countTime(t) {
    waiting(t,buyCar).then(
        resolve =>{
            console.log(resolve);
        }
    ).catch(err =>{
        console.log(err.message)
    })
}

function waiting(i,callback) {
    callback()
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
                if (i <= 0) {
                    reject( new Error('count done'))
                } else {
                    console.log(i)
                    i--
                    resolve(waiting(i,buyCar))
                }
            }
            , 1000 )
    }))
}
function buyCar(){
    console.log('abc')
}
countTime(4)
