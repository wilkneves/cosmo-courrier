"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomaticShip = exports.FastShip = exports.LightShip = exports.CargoShip = exports.Spaceship = void 0;
class Spaceship {
    constructor(weight_capacity, fuel_capacity, fuel_consumption) {
        this.weight_capacity = weight_capacity;
        this.max_fuel = fuel_capacity;
        this.fuel_consumption = fuel_consumption;
    }
    CanTransport(load) {
        if (load.weight <= this.weight_capacity) {
            return true;
        }
        return false;
    }
    CanGoTo(planet) {
        const autonomy = this.max_fuel / this.fuel_consumption;
        if (autonomy >= planet.distance) {
            return true;
        }
        return false;
    }
}
exports.Spaceship = Spaceship;
class CargoShip extends Spaceship {
    constructor() {
        const weight_capacity = 500;
        const max_fuel = 600000;
        const fuel_consumption = 2;
        super(weight_capacity, max_fuel, fuel_consumption);
    }
    Type() {
        return "Cargo Ship";
    }
}
exports.CargoShip = CargoShip;
class LightShip extends Spaceship {
    constructor() {
        const weight_capacity = 50;
        const max_fuel = 75000;
        const fuel_consumption = 0.5;
        super(weight_capacity, max_fuel, fuel_consumption);
    }
    Type() {
        return "Light Ship";
    }
}
exports.LightShip = LightShip;
class FastShip extends Spaceship {
    constructor() {
        const weight_capacity = 75;
        const max_fuel = 112500;
        const fuel_consumption = 0.75;
        super(weight_capacity, max_fuel, fuel_consumption);
    }
    Type() {
        return "Fast Ship";
    }
}
exports.FastShip = FastShip;
class AutomaticShip extends Spaceship {
    constructor() {
        const weight_capacity = 300;
        const max_fuel = 300000;
        const fuel_consumption = 1;
        super(weight_capacity, max_fuel, fuel_consumption);
    }
    Type() {
        return "Automatic Ship";
    }
}
exports.AutomaticShip = AutomaticShip;
//# sourceMappingURL=spaceship.js.map