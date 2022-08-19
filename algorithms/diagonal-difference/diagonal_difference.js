let diagonal1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];

let diagonal2 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];

let diagnoal3 = [
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0]
];

function diagonalDifference(arr) {
    let temp = -1;
    let countLeftToRight = 0;
    let countRightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        temp++;
        countLeftToRight += arr[i][temp];
    }

    temp = arr.length - 1;
    for (let i = 0, j = arr.length; j <= arr.length && j > 0; j--) {
        countRightToLeft += arr[i][temp];
        temp--;
        i++;
    }

    return Math.abs(countLeftToRight - countRightToLeft)
}

console.log(diagonalDifference(diagonal1));//2
console.log(diagonalDifference(diagonal2));//15
console.log(diagonalDifference(diagnoal3));//52
