let test1 = [-4, 3, -9, 0, 4, 1]//0.500000,0.333333, 0.166667
let test2 = [1, 2, 3, -1, -2, -3, 0, 0]//0.375000, 0.375000, 0.250000

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let count = arr.length;

    for (const element of arr) {
        positive = (element > 0) ? positive + 1 : positive;
        negative = (element < 0) ? negative + 1 : negative;
        zero = (element === 0) ? zero + 1 : zero;
    }

    console.log((positive / count).toFixed(6))
    console.log((negative / count).toFixed(6))
    console.log((zero / count).toFixed(6))
}

plusMinus(test1)//0.500000,0.333333, 0.166667
plusMinus(test2)//0.375000, 0.375000, 0.250000
