"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationModules = exports.BiologicalSamples = exports.OxygenTanks = exports.Supplies = exports.ArmoredCapsules = exports.MiningTools = exports.Load = void 0;
class Load {
    constructor(weight) {
        this.weight = weight;
    }
}
exports.Load = Load;
class MiningTools extends Load {
    constructor() {
        const weight = 500;
        super(weight);
    }
    Type() {
        return "Mining Tools";
    }
}
exports.MiningTools = MiningTools;
class ArmoredCapsules extends Load {
    constructor() {
        const weight = 300;
        super(weight);
    }
    Type() {
        return "Armored Capsules";
    }
}
exports.ArmoredCapsules = ArmoredCapsules;
class Supplies extends Load {
    constructor() {
        const weight = 250;
        super(weight);
    }
    Type() {
        return "Supplies";
    }
}
exports.Supplies = Supplies;
class OxygenTanks extends Load {
    constructor() {
        const weight = 200;
        super(weight);
    }
    Type() {
        return "Oxygen Tank";
    }
}
exports.OxygenTanks = OxygenTanks;
class BiologicalSamples extends Load {
    constructor() {
        const weight = 50;
        super(weight);
    }
    Type() {
        return "Biological Samples";
    }
}
exports.BiologicalSamples = BiologicalSamples;
class CommunicationModules extends Load {
    constructor() {
        const weight = 50;
        super(weight);
    }
    Type() {
        return "Communication Modules";
    }
}
exports.CommunicationModules = CommunicationModules;
//# sourceMappingURL=load.js.map