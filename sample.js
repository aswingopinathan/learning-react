let numbers = [1,-1,2,3]
let sum = numbers.reduce((accumulator,current)=>{
    return accumulator + current
},0)

console.log(sum);