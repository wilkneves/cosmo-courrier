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

    Viability(): string {
        if (this.spaceship.CanTransport(this.load)) {
            if (this.spaceship.CanGoTo(this.planet)){
                if (this.planet.CanAccept(this.load)) {
                    return `${this.spaceship.Type()} delivered "${this.load.Type()}" to ${this.planet.Type()}`
                } return `${(this.spaceship.Type())} failed to deliver "${this.load.Type()}": ${this.planet.Type()} did not accept the load.`
            } return `${this.spaceship.Type()} was unable to reach the planet ${this.planet.Type()}`
        } return `${this.spaceship.Type()} failed to deliver "${this.load.Type()}(${this.load.weight}KG)": exceeds capacity`
    }

    ShowMission(): string {
        const title = `Mission: ${this.spaceship.Type()} -> ${this.planet.Type()}`
        const spaceship = `Assigned spacecraft: ${this.spaceship.Type()} | Fuel: ${this.spaceship.max_fuel} | Capacity: ${this.spaceship.weight_capacity}KG`
        const status = this.Viability()

        return `${title.toUpperCase()} \n${spaceship} \n${status}`
    }

    ShowCargoSummary(): string {
        return "string"
    }

    ShowPlanetsVisited(): string {
        return "string"
    }
}