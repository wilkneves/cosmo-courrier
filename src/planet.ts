import { ArmoredCapsules, CommunicationModules, Load, OxygenTanks, Supplies } from "./load"

export abstract class Planet{
    public readonly distance: number

    constructor(distance: number) {
        this.distance = distance
    }

    abstract PlanetAccepts(load: Load): boolean;
}

export class Geasous extends Planet{
    constructor() {
        const distance = 800000
        super(distance)
    }

    PlanetAccepts(load: Load): boolean {
        if (load instanceof Supplies || load instanceof OxygenTanks || load instanceof CommunicationModules) {
            return true
        } return false
    }
}

export class Rocky extends Planet{
    constructor() {
        const distance = 150000
        super(distance)
    }

    PlanetAccepts(load: Load): boolean {
        if (load instanceof Load) {
            return true
        } return false
}
}

export class Icy extends Planet{
    constructor() {
        const distance = 600000
        super(distance)
    }

    PlanetAccepts(load: Load): boolean {
        if (load instanceof Load) {
            return true
        } return false
    }
}

export class Corrosive extends Planet{
    constructor() {
        const distance = 400000
        super(distance)
    }

    PlanetAccepts(load: Load): boolean {
        if (
            load instanceof Supplies || 
            load instanceof OxygenTanks || 
            load instanceof CommunicationModules || 
            load instanceof ArmoredCapsules
        ){ return true
        } return false
    }
}

export class Magnetic extends Planet{
    constructor() {
        const distance = 300000
        super(distance)
    }

    PlanetAccepts(load: Load): boolean {
        if (
            load instanceof Supplies || 
            load instanceof OxygenTanks || 
            load instanceof CommunicationModules || 
            load instanceof ArmoredCapsules
        ){ return true
        } return false
    }
}

export class LowGravity extends Planet{
    constructor() {
        const distance = 200000
        super(distance)
    }

    PlanetAccepts(load: Load): boolean {
        if (load instanceof Load) {
            return true
        } return false
    }
}