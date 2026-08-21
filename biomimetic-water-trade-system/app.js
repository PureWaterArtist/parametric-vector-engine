/**
 * SymbioSys v6.5 - Pure Biomimetic Self-Regulating Network
 * Features: Capillary Tension + Sponge Pipelines + ATP Hydrolysis Metabolism Engine
 */

let simulationEpoch = 1;

// Natural State Profiles with Biochemical ATP Molecular Battery Metrics
let aridia = {
    name: "Aridia",
    waterCurrent: 2200,      
    waterFloor: 2000,        
    waterOptimal: 5000,
    populationMillions: 15.0,
    portfolioProduceShare: 0.70,
    infiltrationBuffer: 800,  
    soilPorosityAlpha: 0.25,
    
    // CELLULAR ENERGY BATTERY: ATP ⇄ ADP System
    atpUnits: 500,            // Active charged batteries (Triphosphate)
    adpUnits: 0,              // Spent discharged batteries (Diphosphate)
    baseAtpCostPerLiter: 1.5, // Base ATP hydrolysis cost per liter
    waterCostPerRecharge: 0.8 // Water needed to recharge 1 ADP back to ATP
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
    
    // Abundant, fully energized metabolic cell
    atpUnits: 5000,    
    adpUnits: 0,
    baseAtpCostPerLiter: 1.0, 
    waterCostPerRecharge: 0.5  
};

function runSimulation() {
    const term = document.getElementById('terminal');
    term.innerHTML = `=== INITIALIZING SYMBIOSYS HOMEOSTATIC CORE (VERSION 6.5) ===\n`;
    term.innerHTML += ">>> BIO-ENERGETICS: Molecular ATP ⇄ ADP Dephosphorylation Active [ONLINE].\n\n";

    let climateFactor = 0.20; // Continued regional dry period
    term.innerHTML += `[ENV EVENT] Dry Cycle Active. Incoming regional precipitation at [${(climateFactor*100)}%].\n`;

    // Baseline climate moisture reaches the topsoil sponge layer first
    aridia.infiltrationBuffer += (300 * climateFactor);
    pluvia.infiltrationBuffer += (1000 * climateFactor);

    [aridia, pluvia].forEach(node => {
        term.innerHTML += `\n--- Processing Cellular Node: ${node.name} ---\n`;

        // 1. WATER SPONGE INFILTRATION TRICKLE
        let slowInfiltrationYield = node.infiltrationBuffer * node.soilPorosityAlpha;
        node.infiltrationBuffer -= slowInfiltrationYield;
        node.waterCurrent += slowInfiltrationYield;

        // 2. URBAN CONSUMPTION METABOLISM DRAW (City Sub-node protection)
        let municipalDrain = (node.populationMillions * 100 * 365) / 1000000; 
        node.waterCurrent -= municipalDrain;
        term.innerHTML += ` -> Municipal Drawdown: -${municipalDrain.toFixed(1)}L extracted for urban consumption.\n`;

        // 3. CAPILLARY SOIL TENSION CALCULATION
        let fluidDeficit = node.waterCurrent - node.waterFloor;
        if (fluidDeficit <= 0) {
            term.innerHTML += ` -> <span class="badge badge-blocked">METABOLIC COLLAPSE</span>: Core hydration reserves completely flattened.\n`;
            node.waterCurrent = node.waterFloor; 
            return;
        }
        let capillaryTension = Math.pow((node.waterOptimal / fluidDeficit), 2);
        term.innerHTML += ` -> Capillary Soil Tension: [${capillaryTension.toFixed(2)}x Dynamic Friction]\n`;

        // 4. FOOD FOOTPRINT UNIT CALCULATION
        let baseExportOrder = 2.0; 
        let waterFootprintRequired = baseExportOrder * 353 * node.portfolioProduceShare;
        
        // 5. THE MOLECULAR HYDROLYSIS BLOCK
        // Kinetic work required scales directly with soil tension, spending active ATP
        let requiredAtpUnits = waterFootprintRequired * node.baseAtpCostPerLiter * capillaryTension;
        term.innerHTML += ` -> Biochemical Check: Requiring [${requiredAtpUnits.toFixed(1)} ATP → ADP] to overcome extraction resistance.\n`;

        // Check active molecular batteries before allowing water extraction
        if (node.atpUnits < requiredAtpUnits) {
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">METABOLIC EXHAUSTION</span>\n`;
            term.innerHTML += ` -> Feedback Loop: Insufficient active ATP bonds to fuel kinetic work. Export dropped.\n`;
            term.innerHTML += ` -> [Genetic Adapt]: Mutating agricultural portfolio away from high-water crops to preserve cell stability.\n`;
            node.portfolioProduceShare = Math.max(0.10, node.portfolioProduceShare - 0.20);
        } else if (capillaryTension > 150.0) {
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">TENSION LOCKOUT</span>\n`;
            term.innerHTML += ` -> Feedback Loop: Capillary boundary strain breached. Route safely frozen.\n`;
            node.portfolioProduceShare = Math.max(0.10, node.portfolioProduceShare - 0.20);
        } else {
            // Execute Dephosphorylation (Split ATP into spent ADP components)
            node.atpUnits -= requiredAtpUnits;
            node.adpUnits += requiredAtpUnits;

            // Cellular Respiration: Recharging spent batteries requires water and generates heat evaporation loss
            let rechargeCoolingLoss = requiredAtpUnits * node.waterCostPerRecharge;
            node.waterCurrent -= (waterFootprintRequired + rechargeCoolingLoss);

            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">METABOLICALLY BALANCE</span>\n`;
            term.innerHTML += ` -> Molecular Action: Hydrolyzed [${requiredAtpUnits.toFixed(1)}] ATP bonds. Active Pool: [${node.atpUnits.toFixed(1)} ATP / ${node.adpUnits.toFixed(1)} ADP Spent]\n`;
            term.innerHTML += ` -> Respiration Water Loss: -${rechargeCoolingLoss.toFixed(1)}L lost during molecular battery re-compression.\n`;
            term.innerHTML += ` -> Current Aquifer Reserve: [${node.waterCurrent.toFixed(1)}L]\n`;
        }
    });

    simulationEpoch++;
    term.innerHTML += `\n=== SIMULATION CYCLE ${simulationEpoch} REGISTERED IN BIO-METABOLIC ENGINE ===`;
                   }
