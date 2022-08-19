function compareTriplets(a, b) {
    let resultA = 0, resultB = 0;

    for (let i = 0; i < a.length; i++) {
        resultA = (a[i] > b[i]) ? resultA + 1 : resultA;
        resultB = (a[i] < b[i]) ? resultB + 1 : resultB;
    }

    return [resultA, resultB];
}

let test1 = compareTriplets([5, 6, 7], [3, 6, 10])
console.log(test1)//[1,1]

let test2 = compareTriplets([20, 20, 30], [20, 20, 50])
console.log(test2)//[0,1]
