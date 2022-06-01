// console.log("Before delay");
//
// function delayBySeconds(sec) {
//     let start = now = Date.now()
//     while(now-start < (sec*1000)) {
//         now = Date.now();
//     }
//     console.log('afterdelay')
// }
// function delayBySeconds2(sec) {
//     let start = now = Date.now()
//     while(now-start < (sec*1000)) {
//         now = Date.now();
//     }
//     console.log('afterdelay2')
// }
//
// console.log('running')
// delayBySeconds(5);
// delayBySeconds2(5)

// let demo2 = ()=>{
//     setTimeout(()=>{
//         console.log('1')
//     },3000)
//     setTimeout(()=>{
//         console.log(2)
//     },7000)
//     console.log('3')
// }
// demo2()
//
// //promise sẽ resolves với một thời gian là t
// const timeOut = (t) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Completed in ${t}`)
//         }, t)
//     })
// }
//
// //tương ứng với t
// const durations = [5000, 2000, 1000]
//
// const promises = [];// một array chứa tất cả các promise
//
// durations.map((duration) => {
//     // Có hai sự kiện xảy ra ở đây
//     // 1. Chúng ta gọi async function (timeout())
//     // 2. Chúng ta push những promise timeout() vào một array để promise.all giải quyết
//     promises.push(timeOut(duration))
// })
//
// console.log(promises); //output có dạng [ Promise { "pending" }, Promise { "pending" } ...]
//
// //Promise.all sẽ đợi cho đến khi tất cả các promises được giải quyết
// Promise.all(promises)
//     .then(response => console.log(response))
//
//
// const set = (t) => {setTimeout(() => {
//     console.log(`Completed in ${t}`)
// }, t)}

// async function doWord(){
//     try {
//         let a = await new Promise((resolve, reject) => {
//             resolve("1000")
//         })
//         // .then(data => {
//         //     console.log(data)
//         //     console.log("asds")
//         // })
//         console.log(a)
//         console.log("dfgdfgd")
//     } catch (err) {
//
//     }
//
//
// }
//
// doWord()
// async function demo(day){
//     return new Promise(((resolve, reject) => {
//         if(day>5){
//             reject('toibiom')
//         }else{
//             resolve('toikhoe')
//         }
//     }))
// }
//
// async function demo2(day){
//   return   await demo(day)
// }
//
// demo2(3).then(result=>{
//     console.log(result);
// })
// try {
//     try {
//         throw new Error('oops');
//     } catch (ex) {
//         console.error('inner', ex.message);
//     } finally {
//         console.log('finally');
//     }
// } catch (ex) {
//     console.error('outer', ex.message);
// }
let axios = require('axios')
function getJSONAPI() {
    let a = new Promise(function (resolve) {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(function (json) {
                resolve(json.data);
            });
    });
    return a;
}

console.log(getJSONAPI());