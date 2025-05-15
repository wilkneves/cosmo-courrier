import { Load } from "./load"

export abstract class Spaceship{
    public readonly weight_capacity: number
    public readonly fuel_capacity: number
    public readonly fuel_consumption: number 
    public readonly velocity: number

    constructor(weight_capacity: number, fuel_capacity: number, fuel_consumption: number, velocity: number,) {
        this.weight_capacity = weight_capacity
        this.fuel_capacity = fuel_capacity
        this.fuel_consumption = fuel_consumption
        this.velocity = velocity
    }

    SpaceshipTransport(load: Load): boolean {
        if (load.weight <= this.weight_capacity) {
            return true
        } return false
    }

    
}

class CargoShip extends Spaceship{
    constructor(){
        const weight_capacity = 500
        const fuel_capacity = 450
        const fuel_consumption = 30
        const velocity = 4000

        super(weight_capacity, fuel_capacity, fuel_consumption, velocity)
    }
}

class LightShip extends Spaceship{
    constructor(){
        const weight_capacity = 50
        const fuel_capacity = 450
        const fuel_consumption = 30
        const velocity = 4000

        super(weight_capacity, fuel_capacity, fuel_consumption, velocity)
    }
}

class FastShip extends Spaceship{
    constructor(){
        const weight_capacity = 75
        const fuel_capacity = 450
        const fuel_consumption = 30
        const velocity = 4000

        super(weight_capacity, fuel_capacity, fuel_consumption, velocity)
    }
}

class AutomaticShip extends Spaceship{
    constructor(){
        const weight_capacity = 300
        const fuel_capacity = 450
        const fuel_consumption = 30
        const velocity = 4000

        super(weight_capacity, fuel_capacity, fuel_consumption, velocity)
    }
}