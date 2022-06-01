let promise =(x)=> new Promise(((resolve, reject) => {
    if(x){
        resolve(3)
    }else{
        reject(new Error("I'm sad"))
    }
}))

promise(false).then( result =>{
        console.log(`se lam ${result}cai banh`);
    }
).catch(err=>{
    console.log(err.message);
}).finally(()=>{
    console.log('van to chuc party')
    }
)