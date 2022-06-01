let axios = require('axios')

async function getUsers(){
    const getUser = await axios.get('https://jsonplaceholder.typicode.com/users')
    return getUser.data
}
getUsers().then(json=>{
const user = json
    console.log(user);
})
// const axios = require("axios");
//
// async function getUsers() {
//     try{
//         return await axios.get("https://jsonplaceholder.typicode.com/users");
//     } catch (err) {
//         console.log(err)
//     }
// }
//
// getUsers()
//     .then(response => {
//         console.log(response.data)
//     })