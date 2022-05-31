let promise =(x)=> new Promise(((resolve, reject) => {
    if(x){
        resolve(3)
    }else{
        reject(new Error("I'm sad"))
    }
}))

promise(true).then( result =>{
        console.log(`se lam ${result}cai banh`);
    }
).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log('van to chuc party')
    }
)