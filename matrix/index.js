class Matrix {
    constructor(value) {
        this.value = value;
    }

    getTotalLength() {
        return this.value.length * this.value[0].length;
    }

    getIndexCoords(index) {
        const i = Math.floor(index / this.value[0].length);
        const j = index % this.value[0].length;

        return [i, j];
    }

    getCoordsIndex([i, j]) {
        return (
            (this.value[0].length * i) + j
        );
    }
}

module.exports = Matrix;
