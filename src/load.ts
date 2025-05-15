export abstract class Load{
    public readonly weight: number

    constructor(weight: number) {
        this.weight = weight
    }
}

export class MiningTools extends Load{
    constructor(){
        const weight = 500
        super(weight)
    }
}

export class ArmoredCapsules extends Load{
    constructor(){
        const weight = 300
        super(weight)
    }
}

export class Supplies extends Load{
    constructor(){
        const weight = 250
        super(weight)
    }
}

export class OxygenTanks extends Load{
    constructor(){
        const weight = 200
        super(weight)
    }
}

export class BiologicalSamples extends Load{
    constructor(){
        const weight = 50
        super(weight)
    }
}

export class CommunicationModules extends Load{
    constructor(){
        const weight = 50
        super(weight)
    }
}
