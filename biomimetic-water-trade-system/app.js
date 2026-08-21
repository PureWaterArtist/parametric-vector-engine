/**
 * SymbioSys v6.0 - Pure Biomimetic Self-Regulating Network
 * Features: Capillary Tension + Sponge Pipelines + Energy-Water-Food (EWF) Nexus
 */

let simulationEpoch = 1;

// Natural State Profiles with EWF Nexus Infrastructure Added
let aridia = {
    name: "Aridia",
    waterCurrent: 2200,      
    waterFloor: 2000,        
    waterOptimal: 5000,
    populationMillions: 15.0,
    portfolioProduceShare: 0.70,
    infiltrationBuffer: 800,  
    soilPorosityAlpha: 0.25,
    
    // NEXUS POOLS: Energy Grid Integration
    energyPoolUnits: 500,     // Total electricity reserves available (e.g., MWh)
    energyBaseCostPerLiter: 1.5, // Base kWh needed per liter under zero tension
    waterCostPerEnergyUnit: 0.8  // Liters evaporated to generate 1 Energy Unit
};

let pluvia = {
    name: "Pluvia",
    waterCurrent: 9000,
    waterFloor: 3000,
    waterOptimal: 10000,
    populationMillions: 45.0,
    portfolioProduceShare: 0.40,
    infiltrationBuffer: 2500,
    soilPorosityAlpha: 0.40,
    
    // NEXUS POOLS: Flushed with energy infrastructure
    energyPoolUnits: 5000,    
    energyBaseCostPerLiter: 1.0, 
    waterCostPerEnergyUnit: 0.5  
};

function runSimulation() {
    const term = document.getElementById('terminal');
    term.innerHTML = `=== INITIALIZING SYMBIOSYS HOMEOSTATIC CORE (VERSION 6.0) ===\n`;
    term.innerHTML += ">>> NEXUS INTERLOCK: Energy-Water-Food (EWF) Metabolic Gradients [ONLINE].\n\n";

    let climateFactor = 0.20; // Continued dry period
    term.innerHTML += `[ENV EVENT] Dry Cycle Active. Incoming regional precipitation at [${(climateFactor*100)}%].\n`;

    aridia.infiltrationBuffer += (300 * climateFactor);
    pluvia.infiltrationBuffer += (1000 * climateFactor);

    [aridia, pluvia].forEach(node => {
        term.innerHTML += `\n--- Processing Nexus Node: ${node.name} ---\n`;

        // 1. WATER SPONGE INFILTRATION TRICKLE
        let slowInfiltrationYield = node.infiltrationBuffer * node.soilPorosityAlpha;
        node.infiltrationBuffer -= slowInfiltrationYield;
        node.waterCurrent += slowInfiltrationYield;

        // 2. URBAN CONSUMPTION METABOLISM DRAW
        let municipalDrain = (node.populationMillions * 100 * 365) / 1000000; 
        node.waterCurrent -= municipalDrain;
        term.innerHTML += ` -> Municipal Drawdown: -${municipalDrain.toFixed(1)}L extracted for urban consumption.\n`;

        // 3. CAPILLARY SOIL TENSION CALCULATION
        let fluidDeficit = node.waterCurrent - node.waterFloor;
        if (fluidDeficit <= 0) {
            term.innerHTML += ` -> <span class="badge badge-blocked">METABOLIC COLLAPSE</span>: Core hydration reserves entirely depleted.\n`;
            node.waterCurrent = node.waterFloor; 
            return;
        }
        let capillaryTension = Math.pow((node.waterOptimal / fluidDeficit), 2);
        term.innerHTML += ` -> Capillary Soil Tension: [${capillaryTension.toFixed(2)}x Dynamic Friction]\n`;

        // 4. FOOD FOOTPRINT CALCULATION
        let baseExportOrder = 2.0; 
        let waterFootprintRequired = baseExportOrder * 353 * node.portfolioProduceShare;
        
        // 5. THE ENERGY INTERLOCK (The Nexus Core)
        // Electricity required scales directly with the physical tension of the drying soil
        let requiredEnergyUnits = waterFootprintRequired * node.energyBaseCostPerLiter * capillaryTension;
        term.innerHTML += ` -> EWF Nexus Estimate: Requiring [${requiredEnergyUnits.toFixed(1)} Energy Units] to extract ${waterFootprintRequired.toFixed(1)}L for agricultural growth.\n`;

        // Check Energy Availability Before Processing Water Trade
        if (node.energyPoolUnits < requiredEnergyUnits) {
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">ENERGY GRID BLOCK</span>\n`;
            term.innerHTML += ` -> Feedback Loop: Insufficient electricity reserves to override soil tension. Export vector dropped.\n`;
            term.innerHTML += ` -> [Genetic Adapt]: Modifying crop portfolio away from water-intensive systems to preserve grid stability.\n`;
            node.portfolioProduceShare = Math.max(0.10, node.portfolioProduceShare - 0.20);
        } else if (capillaryTension > 150.0) {
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">TENSION REJECTION</span>\n`;
            term.innerHTML += ` -> Feedback Loop: Capillary strain breaches safety threshold. Route closed.\n`;
            node.portfolioProduceShare = Math.max(0.10, node.portfolioProduceShare - 0.20);
        } else {
            // Deduct Water and Energy simultaneously (Closing the nexus loop)
            node.waterCurrent -= waterFootprintRequired;
            node.energyPoolUnits -= requiredEnergyUnits;

            // Energy plants consume water for cooling during generation replacement
            let coolingWaterLost = requiredEnergyUnits * node.waterCostPerEnergyUnit;
            node.waterCurrent -= coolingWaterLost;

            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">NEXUS COMPLIANT</span>\n`;
            term.innerHTML += ` -> Energy Used: -${requiredEnergyUnits.toFixed(1)} Units. Remaining Grid Pool: [${node.energyPoolUnits.toFixed(1)} Units]\n`;
            term.innerHTML += ` -> Generator Cooling Loss: -${coolingWaterLost.toFixed(1)}L evaporated from core table.\n`;
            term.innerHTML += ` -> Current Aquifer Reserve: [${node.waterCurrent.toFixed(1)}L]\n`;
        }
    });

    simulationEpoch++;
    term.innerHTML += `\n=== SIMULATION CYCLE ${simulationEpoch} REGISTERED VIA NEXUS CORE ===`;
}
