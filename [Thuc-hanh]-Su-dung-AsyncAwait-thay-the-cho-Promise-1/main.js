async function division(num1,num2){
    if(num2!==0){
        return num1/num2
    }else{
       throw new Error('noob!')
    }
}

async function run(){
    try{let result = await division(1,1)
        console.log(result);
    }catch (e) {
        console.log(e.message);
    }
}
run()