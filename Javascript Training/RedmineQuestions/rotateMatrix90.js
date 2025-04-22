let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function transposeMatrix(matrix) {
    let transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
}

function rotateMatrix90(matrix) {
    let rotatedMatrix = transposeMatrix(matrix);
    for (let i = 0; i < rotatedMatrix.length; i++) {
        rotatedMatrix[i].reverse();
    }
    return rotatedMatrix;
}

let rotatedMatrix = rotateMatrix90(matrix);
console.log(rotatedMatrix);