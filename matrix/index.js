class Matrix {
    constructor(value) {
        this.value = value;

        if (!this.isValid()) {
            throw new Error('Your matrix values need to be in ascending order!');
        }
    }

    isValid() {
        let biggestSoFar = -Infinity;

        for (let i = 0; i < this.getTotalLength(); i++) {
            if (this.v(i) < biggestSoFar) return false;

            biggestSoFar = this.v(i);
        }

        return true;
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

    v(index) {
        const [i, j] = this.getIndexCoords(index);

        return this.value[i][j];
    }

    getValueIndex(value, [start = 0, end = this.getTotalLength()] = []) {
        let middle = Math.floor(((end - start) / 2) + start);

        if (this.v(middle) > value) {
            if (middle === end) return null;

            return this.getValueIndex(value, [start, middle]);
        } else if (this.v(middle) < value) {
            if (middle === start) return null;

            return this.getValueIndex(value, [middle, end]);
        }

        return this.getIndexCoords(middle);
    }

    getValueIndexSimple(value) {
        for (let i = 0; i < this.getTotalLength(); i++) {
            if (this.v(i) === value) {
                return this.getIndexCoords(i);
            }
        }

        return null;
    }
}

module.exports = Matrix;
