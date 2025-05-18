"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowGravity = exports.Magnetic = exports.Corrosive = exports.Icy = exports.Rocky = exports.Geasous = exports.Planet = void 0;
const load_1 = require("./load");
class Planet {
    constructor(distance) {
        this.distance = distance;
    }
}
exports.Planet = Planet;
class Geasous extends Planet {
    constructor() {
        const distance = 100000;
        super(distance);
    }
    CanAccept(load) {
        if (load instanceof load_1.Supplies || load instanceof load_1.OxygenTanks || load instanceof load_1.CommunicationModules) {
            return true;
        }
        return false;
    }
    Type() {
        return "Geaseous";
    }
}
exports.Geasous = Geasous;
class Rocky extends Planet {
    constructor() {
        const distance = 150000;
        super(distance);
    }
    CanAccept(load) {
        if (load instanceof load_1.Load) {
            return true;
        }
        return false;
    }
    Type() {
        return "Rocky";
    }
}
exports.Rocky = Rocky;
class Icy extends Planet {
    constructor() {
        const distance = 200000;
        super(distance);
    }
    CanAccept(load) {
        if (load instanceof load_1.Load) {
            return true;
        }
        return false;
    }
    Type() {
        return "Icy";
    }
}
exports.Icy = Icy;
class Corrosive extends Planet {
    constructor() {
        const distance = 80000;
        super(distance);
    }
    CanAccept(load) {
        if (load instanceof load_1.Supplies ||
            load instanceof load_1.OxygenTanks ||
            load instanceof load_1.CommunicationModules ||
            load instanceof load_1.ArmoredCapsules) {
            return true;
        }
        return false;
    }
    Type() {
        return "Corrosive";
    }
}
exports.Corrosive = Corrosive;
class Magnetic extends Planet {
    constructor() {
        const distance = 120000;
        super(distance);
    }
    CanAccept(load) {
        if (load instanceof load_1.Supplies ||
            load instanceof load_1.OxygenTanks ||
            load instanceof load_1.CommunicationModules ||
            load instanceof load_1.ArmoredCapsules) {
            return true;
        }
        return false;
    }
    Type() {
        return "Magnetic";
    }
}
exports.Magnetic = Magnetic;
class LowGravity extends Planet {
    constructor() {
        const distance = 160000;
        super(distance);
    }
    CanAccept(load) {
        if (load instanceof load_1.Load) {
            return true;
        }
        return false;
    }
    Type() {
        return "Low Gravity";
    }
}
exports.LowGravity = LowGravity;
//# sourceMappingURL=planet.js.map