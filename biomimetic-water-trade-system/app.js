/**
 * SymbioSys v3.0 Core Algorithmic Logic
 * Features: Nested Human Consumption Sub-Nodes & Agent-Based Genetic Learning Layers
 */

// Global state tracking for evolutionary epochs
let simulationEpoch = 1;

// Base Node Data Structures
let aridia = {
    name: "Aridia",
    blueWaterPool: 3500,
    ecosystemFloor: 2000,
    optimalWaterVolume: 5000,
    h2oCredits: 5.0,
    metabolicHealth: 0.35,
    // Nested Consumption Sub-Node
    populationMillions: 12.5,
    perCapitaDailyLiters: 150, 
    // Genetic Crop Portfolio Array (Must total 1.0)
    portfolio: { lowWaterGrains: 0.30, highWaterProduce: 0.70 },
    fitnessHistory: []
};

let pluvia = {
    name: "Pluvia",
    blueWaterPool: 12000,
    ecosystemFloor: 3000,
    optimalWaterVolume: 10000,
    h2oCredits: 20.0,
    metabolicHealth: 0.95,
    populationMillions: 45.0,
    perCapitaDailyLiters: 250,
    portfolio: { lowWaterGrains: 0.60, highWaterProduce: 0.40 },
    fitnessHistory: []
};

function runSimulation() {
    const term = document.getElementById('terminal');
    term.innerHTML = `=== INITIALIZING SYMBIOSYS SIMULATION ENGINE (EPOCH ${simulationEpoch}) ===\n`;
    term.innerHTML += ">>> RECEPTOR SUB-NODES: Human Metabolism Arrays [ONLINE]\n";
    term.innerHTML += ">>> AGENT LAYER: Genetic Portfolio Evolutionary Mutation Engine [ONLINE]\n\n";

    // 1. RUN NESTED HUMAN DRAWDOWN (City Sub-Nodes preempt agriculture)
    term.innerHTML += "--- Phase 1: City Sub-Node Metabolism Drawdown ---\n";
    [aridia, pluvia].forEach(node => {
        // Calculate annual municipal drinking water requirement
        let annualHumanNeed = (node.populationMillions * 1000000 * node.perCapitaDailyLiters * 365) / 1000000; // in Liters scaled down for model
        node.blueWaterPool -= annualHumanNeed;
        term.innerHTML += ` -> [${node.name} City]: Consumed ${annualHumanNeed.toFixed(1)}L for basic human survival. Remaining Pool: ${node.blueWaterPool.toFixed(1)}L\n`;
    });

    // 2. STOCHASTIC ENVIRONMENTAL SHOCK INTERVENTION
    term.innerHTML += "\n--- Phase 2: Stochastic Climate Shock Calculation ---\n";
    let climateShockFactor = 0.15; // 85% reduction in rainfall (Severe Drought)
    term.innerHTML += ` -> ENVIRONMENTAL EVENT: Regional Mega-Drought Strikes Aridia (Climate Index: ${climateShockFactor})\n`;
    
    // Recalculate Exporter Health after municipal drain and climate crash
    aridia.metabolicHealth = ((aridia.blueWaterPool - aridia.ecosystemFloor) / aridia.optimalWaterVolume) * climateShockFactor;
    aridia.metabolicHealth = Math.max(0.01, aridia.metabolicHealth); // Floor at 0.01
    term.innerHTML += ` -> [Aridia Receptor]: Internal health score drops to critical [${aridia.metabolicHealth.toFixed(3)}]\n`;

    // 3. TRANSACTION COEF & FIREWALL INTERACTION
    term.innerHTML += "\n--- Phase 3: Autonomous Edge Friction & Autonomous Trade Execution ---\n";
    let cropDemandKg = 5.0;
    // Calculate total blue water required based on Aridia's high-water crop allocation footprint
    let blueWaterRequired = cropDemandKg * 353 * aridia.portfolio.highWaterProduce; 
    
    term.innerHTML += ` -> Trade Request: Pluvia orders ${cropDemandKg}kg produce matching Aridia's active portfolio mix.\n`;
    term.innerHTML += ` -> Volumetric Requirement: Crop generation demands ${blueWaterRequired.toFixed(1)}L of Blue Water.\n`;

    let frictionCoefficient = Math.exp(pluvia.metabolicHealth - aridia.metabolicHealth);
    term.innerHTML += ` -> Edge Friction Metric: Calculated at [${frictionCoefficient.toFixed(2)}x]\n`;

    // Intercept Contract if it violates local human baseline
    if ((aridia.blueWaterPool - blueWaterRequired) < aridia.ecosystemFloor) {
        term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">BLOCKED VIA METABOLIC FIREWALL</span>\n`;
        term.innerHTML += ` -> System Alert: Agricultural export denied. Water locked internally to prevent urban dehydration.\n`;
        aridia.fitnessHistory.push(0); // Failed economic generation epoch
    } else {
        aridia.blueWaterPool -= blueWaterRequired;
        term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">APPROVED WITH HYPER-PREMIUM</span>\n`;
        aridia.fitnessHistory.push(100);
    }

    // 4. AGENT-BASED GENETIC LEARNING LAYER EVOLUTION
    term.innerHTML += "\n--- Phase 4: Decentralized Genetic Mutation & Crop Portfolio Pivot ---\n";
    term.innerHTML += ` -> Active Portfolio Mix Before Adaptation: [Grains: ${(aridia.portfolio.lowWaterGrains * 100).toFixed(0)}%, Produce: ${(aridia.portfolio.highWaterProduce * 100).toFixed(0)}%]\n`;

    // Genetic adaptation strategy based on health duress
    if (aridia.metabolicHealth < 0.20) {
        term.innerHTML += " -> [Learning Trigger]: Low fitness detected. Executing defensive portfolio mutation...\n";
        // Mutate away from water-heavy products toward low-water staples
        let mutationShift = 0.25; 
        aridia.portfolio.highWaterProduce -= mutationShift;
        aridia.portfolio.lowWaterGrains += mutationShift;
        term.innerHTML += ` -> <span class="badge badge-subsidy">EVOLUTION SUCCESSFUL</span>: Next Epoch Portfolio mutated to [Grains: ${(aridia.portfolio.lowWaterGrains * 100).toFixed(0)}%, Produce: ${(aridia.portfolio.highWaterProduce * 100).toFixed(0)}%]\n`;
    } else {
        term.innerHTML += " -> [Learning Trigger]: Environmental matrix stable. Retaining current strategic portfolio balance.\n";
    }

    simulationEpoch++;
    term.innerHTML += `\n=== SIMULATION RUN COMPLETED. ALL SUB-NODE CHANGES SAVED FOR INSTANCE CYCLE ${simulationEpoch} ===`;
}
