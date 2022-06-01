async function birthDay (isKayoSick){
    if(isKayoSick){
        return 2
    }else{
        throw new Error('im sad')
    }
}

async function run(isKayoSick){
   try {
       let result =await birthDay(isKayoSick)
       console.log(result);
   }catch (e) {
       console.log(e.message);
   }finally {
       console.log('still party')
   }
}
run(true)