const array =  [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }
];
let male = 'male'
let female = 'female'
let maleSum = 0
let femaleSum = 0
let countMale = 0
let countFemale = 0
array.forEach(((value, index) => {
    if(value.gender==male){
        maleSum+= value.poin
        countMale++
    }else{
        femaleSum += value.poin
        countFemale++
    }
}))
let averageMale = maleSum/countMale
let averageFemale = femaleSum/countFemale
console.log(averageMale)
console.log(averageFemale);