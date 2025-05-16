import { ArmoredCapsules, CommunicationModules, Load, OxygenTanks, Supplies } from "./load"

export abstract class Planet{
    public readonly distance: number

    constructor(distance: number) {
        this.distance = distance
    }

    abstract Type(): string;
    abstract CanAccept(load: Load): boolean;
}

export class Geasous extends Planet{
    constructor() {
        const distance = 100000
        super(distance)
    }

    CanAccept(load: Load): boolean {
        if (load instanceof Supplies || load instanceof OxygenTanks || load instanceof CommunicationModules) {
            return true
        } return false
    }

    Type(): string {
        return "Geaseous"
    }
}

export class Rocky extends Planet{
    constructor() {
        const distance = 150000
        super(distance)
    }

    CanAccept(load: Load): boolean {
        if (load instanceof Load) {
            return true
        } return false
    }

    Type(): string {
        return "Rocky"
    }
}

export class Icy extends Planet{
    constructor() {
        const distance = 200000
        super(distance)
    }

    CanAccept(load: Load): boolean {
        if (load instanceof Load) {
            return true
        } return false
    }

    Type(): string {
        return "Icy"
    }
}

export class Corrosive extends Planet{
    constructor() {
        const distance = 80000
        super(distance)
    }

    CanAccept(load: Load): boolean {
        if (
            load instanceof Supplies || 
            load instanceof OxygenTanks || 
            load instanceof CommunicationModules || 
            load instanceof ArmoredCapsules
        ){ return true
        } return false
    }

    Type(): string {
        return "Corrosive"
    }
}

export class Magnetic extends Planet{
    constructor() {
        const distance = 120000
        super(distance)
    }

    CanAccept(load: Load): boolean {
        if (
            load instanceof Supplies || 
            load instanceof OxygenTanks || 
            load instanceof CommunicationModules || 
            load instanceof ArmoredCapsules
        ){ return true
        } return false
    }

    Type(): string {
        return "Magnetic"
    }
}

export class LowGravity extends Planet{
    constructor() {
        const distance = 160000
        super(distance)
    }

    CanAccept(load: Load): boolean {
        if (load instanceof Load) {
            return true
        } return false
    }

    Type(): string {
        return "Low Gravity"
    }
}