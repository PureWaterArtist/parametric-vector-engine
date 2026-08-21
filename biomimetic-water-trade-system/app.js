/**
 * SymbioSys v5.0 - Ultimate Biomimetic Self-Regulating Network
 * Features: Capillary Extraction Tension Feedback + Sponge Infiltration Lag Pipeline
 */

let simulationEpoch = 1;

// Natural State Profiles with Multi-Year Buffer Infiltration Pipelines
let aridia = {
    name: "Aridia",
    waterCurrent: 2200,      // Liquid asset pool
    waterFloor: 2000,        
    waterOptimal: 5000,
    populationMillions: 15.0,
    portfolioProduceShare: 0.70,
    // The Sponge Buffer: Represents moisture moving slowly down through soil layers
    infiltrationBuffer: 800,  // Stored moisture from previous rainy periods
    soilPorosityAlpha: 0.25   // Only 25% of buffered water reaches the aquifer per year
};

let pluvia = {
    name: "Pluvia",
    waterCurrent: 9000,
    waterFloor: 3000,
    waterOptimal: 10000,
    populationMillions: 45.0,
    portfolioProduceShare: 0.40,
    infiltrationBuffer: 2500,
    soilPorosityAlpha: 0.40   // Abundant looser soil drains faster (40% transmission)
};

function runSimulation() {
    const term = document.getElementById('terminal');
    term.innerHTML = `=== INITIALIZING SYMBIOSYS HOMEOSTATIC CORE (VERSION 5.0) ===\n`;
    term.innerHTML += ">>> MECHANICS: Capillary Matrix Tension & Hydrological Sponge Pipelines [ONLINE].\n\n";

    // 1. STOCHASTIC CLIMATE INPUTS ADDED TO SPONGE BUFFER FIRST
    let climateFactor = 0.20; // Continued dry period
    term.innerHTML += `[ENV EVENT] Dry weather active. Incoming regional precipitation at [${(climateFactor*100)}%].\n`;
    term.innerHTML += ` -> Note: Climate moisture is captured by topsoil buffers; it does not drop instantly into wells.\n`;

    // Add baseline rain directly to the topsoil delay buffer, not the live water table
    aridia.infiltrationBuffer += (300 * climateFactor);
    pluvia.infiltrationBuffer += (1000 * climateFactor);

    // 2. RUN EMBEDDED SYSTEM LOOP WITH INFILTRATION DELAYS
    [aridia, pluvia].forEach(node => {
        term.innerHTML += `\n--- Processing Node Metabolism: ${node.name} ---\n`;

        // Step A: Trickle water from sponge buffer down into core aquifer pool
        let slowInfiltrationYield = node.infiltrationBuffer * node.soilPorosityAlpha;
        node.infiltrationBuffer -= slowInfiltrationYield;
        node.waterCurrent += slowInfiltrationYield;
        term.innerHTML += ` -> Hydrological Sponge Trickle: Core pool received +${slowInfiltrationYield.toFixed(1)}L of slowly filtered sub-surface water.\n`;

        // Step B: Municipal Metabolism Drawdown
        let municipalDrain = (node.populationMillions * 100 * 365) / 1000000; 
        node.waterCurrent -= municipalDrain;
        term.innerHTML += ` -> Urban Consumption Draw: -${municipalDrain.toFixed(1)}L drawn for baseline human survival.\n`;

        // Step C: Capillary Soil Tension Metric Calculation
        let fluidDeficit = node.waterCurrent - node.waterFloor;
        
        if (fluidDeficit <= 0) {
            term.innerHTML += ` -> <span class="badge badge-blocked">BIOLOGICAL SHOCK</span>: Aquifer gradient flattened below critical limits.\n`;
            node.waterCurrent = node.waterFloor; 
            return;
        }

        let capillaryTension = Math.pow((node.waterOptimal / fluidDeficit), 2);
        term.innerHTML += ` -> Capillary Matrix Tension: [${capillaryTension.toFixed(2)}x Energy Friction units]\n`;

        // Step D: Trade Calculation Phase
        let baseExportOrder = 2.0; 
        let waterFootprintRequired = baseExportOrder * 353 * node.portfolioProduceShare;
        let trueEnergyCost = (waterFootprintRequired * capillaryTension).toFixed(1);
        term.innerHTML += ` -> Volumetric Footprint: Crop generation requires ${waterFootprintRequired.toFixed(1)}L of Blue Water.\n`;

        // Natural Feedback Boundary Checks
        if (capillaryTension > 150.0) {
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">NATURAL REJECTION</span>\n`;
            term.innerHTML += ` -> Feedback Loop: Energy threshold exceeded. Trade route closed down autonomously.\n`;
            term.innerHTML += ` -> [Genetic Adapt]: Shifting acreage strategy away from high-water produce to mitigate stress values.\n`;
            node.portfolioProduceShare = Math.max(0.10, node.portfolioProduceShare - 0.20);
        } else {
            node.waterCurrent -= waterFootprintRequired;
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">METABOLICALLY BALANCED</span>\n`;
            term.innerHTML += ` -> Current Live Aquifer Level: [${node.waterCurrent.toFixed(1)}L]\n`;
            term.innerHTML += ` -> Soil Sponge Reservoir: [${node.infiltrationBuffer.toFixed(1)}L remaining to filter down]\n`;
        }
    });

    simulationEpoch++;
    term.innerHTML += `\n=== SIMULATION CYCLE ${simulationEpoch} REGISTERED SUCCESSFULLY ===`;
}
