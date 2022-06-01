let axios = require('axios')
function getJSONAPI() {
    return new Promise((resolve => {
        axios.get('http://jsonplaceholder.typicode.com/posts/2')
            .then((json)=>{
                resolve(json.config)
            })
    }))
}
getJSONAPI().then(result=>{
    console.log(result);
})