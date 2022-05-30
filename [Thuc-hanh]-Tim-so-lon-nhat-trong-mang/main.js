const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888]
let max = array[0]
array.forEach(((value, index) => {
    if(max<value){
        max = value
    }
}))
console.log(`Giá trị lớn nhất của mảng là ${max}`)