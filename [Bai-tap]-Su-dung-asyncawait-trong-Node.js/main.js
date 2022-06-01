async function maxArray(arr){
  if(arr instanceof Array){
      let max = arr[0]
      for (let i = 0; i < arr.length; i++) {
          if(max<=arr[i]){
              max= arr[i]
          }
      }return max
  }else{
      throw new Error('it is not array')
  }
}

async function f(arr) {
  try {
    let result=  await maxArray(arr)
      console.log(result);
  }catch(e){
      console.log(e.message);
  }

}
f(1)