import { ArmoredCapsules, BiologicalSamples, CommunicationModules, Load, MiningTools, OxygenTanks, Supplies } from "./load";
import { Corrosive, Geasous, Icy, LowGravity, Magnetic, Planet, Rocky } from "./planet";
import { AutomaticShip, CargoShip, FastShip, LightShip, Spaceship } from "./spaceship";
import { randomInstance } from "./utils";

export class Mission{
    spaceship: Spaceship
    planet: Planet
    load: Load

    constructor() {
        const spaceshipTypes = [new CargoShip(), new LightShip(), new FastShip(),new AutomaticShip( )]
        const planetType = [new Geasous(), new Rocky(), new Icy(), new Corrosive(), new Magnetic(), new LowGravity()]
        const loadType = [new MiningTools(), new ArmoredCapsules(), new Supplies(), new OxygenTanks(), new BiologicalSamples(), new CommunicationModules()]

        this.spaceship = randomInstance(spaceshipTypes)
        this.planet = randomInstance(planetType)
        this.load = randomInstance(loadType)
    }

    viability(): string {
         

        return "string"
    }
    show(): string {
        const informations = `
        Planeta: ${this.planet.PlanetType()}
        Nave: ${this.spaceship.SpaceshipType()}
        Carga: ${this.load.LoadType()}`

        return informations
    }
}