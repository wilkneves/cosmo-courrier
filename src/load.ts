export abstract class Load{
    public readonly weight: number

    constructor(weight: number) {
        this.weight = weight
    }

    abstract Type(): string;
}

export class MiningTools extends Load{
    constructor(){
        const weight = 500
        super(weight)
    }
    
    Type(): string {
        return "Mining Tools"
    }
}

export class ArmoredCapsules extends Load{
    constructor(){
        const weight = 300
        super(weight)
    }

    Type(): string {
        return "Armored Capsules"
    }
}

export class Supplies extends Load{
    constructor(){
        const weight = 250
        super(weight)
    }

    Type(): string {
        return "Supplies"
    }
}

export class OxygenTanks extends Load{
    constructor(){
        const weight = 200
        super(weight)
    }

    Type(): string {
        return "Oxygen Tank"
    }
}

export class BiologicalSamples extends Load{
    constructor(){
        const weight = 50
        super(weight)
    }

    Type(): string {
        return "Biological Samples"
    }
}

export class CommunicationModules extends Load{
    constructor(){
        const weight = 50
        super(weight)
    }

    Type(): string {
        return "Communication Modules"
    }
}
