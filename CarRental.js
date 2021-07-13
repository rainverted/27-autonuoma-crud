class CarRental {
    constructor(companyName) {
        this.list = [];
        this.companyName = companyName;
    }

    intro() {
        let carCount = 0;

        for (let i = 0; i < this.list.length; i++) {
            const availableCar = this.list[i];
            if (availableCar.working === true) {
                carCount++;
            }
        }
        console.log(`Hi, we are ${this.companyName} and we have ${carCount} cars available.`);
    }

    addCar(name, color, price) {
        let car = {
            name, color, price,
        }
        this.list.push(car);
        car.working = true;
    }

    carPark() {
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            const availableCar = this.list[i];
            if (availableCar.working === true) {
                console.log(`${++count}. ${availableCar.name} (${availableCar.color}) is for ${availableCar.price} EUR/day.`);
            }

        }
    }

    updateCarPrice(index, updatedPrice) {
        this.list[index].price = updatedPrice;
    }

    carAccident(index) {
        this.list[index].working = false;
    }

    carRepair(index) {
        this.list[index].working = true;
    }

    removeCar(index) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;
    }
}

module.exports = CarRental;