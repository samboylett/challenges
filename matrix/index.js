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

    getCoordsValue(...coords) {
        let value = this.value;

        coords.forEach(coord => {
            value = value[coord];
        });

        return value;
    }

    getDimensions() {
        let coords = [0];

        while (Array.isArray(this.getCoordsValue(...coords))) {
            coords.push(0);
        }

        return coords.length;
    }

    getTotalLength() {
        let length = this.value.length;

        for (let i = 0; i < (this.getDimensions() - 1); i++) {
            length *= this.getCoordsValue(...new Array(i + 1).fill(0)).length;
        }

        return length;
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
        return this.getCoordsValue(...this.getIndexCoords(index));
    }

    getValueIndex(value) {
        let start = 0;
        let end = this.getTotalLength();

        do {
            const middle = Math.floor(((end - start) / 2) + start);

            if (this.v(middle) > value) {
                if (middle === end) break;

                end = middle;
            } else if (this.v(middle) < value) {
                if (middle === start) break;

                start = middle;
            } else {
                return this.getIndexCoords(middle);
            }
        } while(true);

        return null;
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
