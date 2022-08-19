function simpleArraySum(arr) {
    return arr.reduce((acc, value) => acc + value)
}

let result = simpleArraySum([1, 2, 3, 4, 10, 11])
console.log(result)//31
