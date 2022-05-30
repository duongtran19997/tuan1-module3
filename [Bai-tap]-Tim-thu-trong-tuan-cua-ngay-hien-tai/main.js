const array =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
let d = new Date()
let day = d.getDay();
array.forEach(((value, index) => {
    if(day==index+1){
        console.log(value);
    }
}))
