function getCoords(matrix, match) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === match) {
                return [i, j];
            }
        }
    }
    return null;
}

module.exports = getCoords;
