"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
const load_1 = require("./load");
const planet_1 = require("./planet");
const spaceship_1 = require("./spaceship");
const utils_1 = require("./utils");
class Mission {
    constructor() {
        const spaceshipTypes = [new spaceship_1.CargoShip(), new spaceship_1.LightShip(), new spaceship_1.FastShip(), new spaceship_1.AutomaticShip()];
        const planetType = [new planet_1.Geasous(), new planet_1.Rocky(), new planet_1.Icy(), new planet_1.Corrosive(), new planet_1.Magnetic(), new planet_1.LowGravity()];
        const loadType = [new load_1.MiningTools(), new load_1.ArmoredCapsules(), new load_1.Supplies(), new load_1.OxygenTanks(), new load_1.BiologicalSamples(), new load_1.CommunicationModules()];
        this.spaceship = (0, utils_1.randomInstance)(spaceshipTypes);
        this.planet = (0, utils_1.randomInstance)(planetType);
        this.load = (0, utils_1.randomInstance)(loadType);
    }
    Viability() {
        if (this.spaceship.CanTransport(this.load)) {
            if (this.spaceship.CanGoTo(this.planet)) {
                if (this.planet.CanAccept(this.load)) {
                    return `${this.spaceship.Type()} delivered "${this.load.Type()}" to ${this.planet.Type()}`;
                }
                return `${(this.spaceship.Type())} failed to deliver "${this.load.Type()}": ${this.planet.Type()} did not accept the load.`;
            }
            return `${this.spaceship.Type()} was unable to reach the planet ${this.planet.Type()}`;
        }
        return `${this.spaceship.Type()} failed to deliver "${this.load.Type()}(${this.load.weight}KG)": exceeds capacity`;
    }
    ShowMission() {
        const title = `Mission: ${this.spaceship.Type()} -> ${this.planet.Type()}`;
        const spaceship = `Assigned spacecraft: ${this.spaceship.Type()} | Fuel: ${this.spaceship.max_fuel} | Capacity: ${this.spaceship.weight_capacity}KG`;
        const status = this.Viability();
        return `${title.toUpperCase()} \n${spaceship} \n${status}`;
    }
    ShowCargoSummary() {
        return "string";
    }
    ShowPlanetsVisited() {
        return "string";
    }
}
exports.Mission = Mission;
//# sourceMappingURL=mission.js.map