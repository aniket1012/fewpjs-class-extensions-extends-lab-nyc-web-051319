// Your code here

class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((total, currentValue) => total + currentValue)
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides === 3) {
            if ((this.array[0] + this.array[1] > this.array[2]) && (this.array[0] + this.array[2] > this.array[1]) && (this.array[1] + this.array[2] > this.array[0])) {
                return true 
            }
        }
        return false 
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            if (this.array[0] === this.array[1] && this.array[0] === this.array[2] && this.array[0] === this.array[3]) {
                return true 
            }
        }
        return false
    }

    get area() {
        return this.array[0] * this.array[1]
    }
}

