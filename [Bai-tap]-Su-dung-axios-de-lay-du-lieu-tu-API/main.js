// let axios = require('axios')
// function getDataJSON() {
//     return new Promise(((resolve, reject) => {
//         axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
//             ).then(response=>{
//       resolve(response.data)})
//             .catch(err =>{
//             reject(err)
//         })
//     }))
// }
//
// getDataJSON().then(res=>{
//     const IMG = res
//     console.log(res['hdurl']);;
// }).catch(e=>{
//     console.log(e.message);
// })


const getAPOD = async () => {
    const getApod = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    return getApod.data;
}

getAPOD()
    .then(json => {
        const APOD = json
       document.getElementById('img').setAttribute('src',APOD.url)
       //  console.log(APOD['url'])
    })