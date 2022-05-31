// function download(callback,url) {
//     setTimeout(() => {
//         console.log(`Downloading ${url} ...`);
//         callback(url)
//     },1000);
//
// }
//
// function process(picture) {
//     console.log(`Processing ${picture}`);
// }
//
// let url = 'google.com'
//
// download(process,url)



const p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
    .catch(error => console.log(error))
    .catch(error => console.log(error));