// Upgraded Node State Structure using the ATP Molecular Battery Metaphor
let aridia = {
    name: "Aridia",
    waterCurrent: 2200,      
    waterFloor: 2000,        
    waterOptimal: 5000,
    populationMillions: 15.0,
    portfolioProduceShare: 0.70,
    infiltrationBuffer: 800,  
    soilPorosityAlpha: 0.25,
    
    // BIOMIMETIC ATP POOLS
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
    
    atpUnits: 5000,    
    adpUnits: 0,
    baseAtpCostPerLiter: 1.0, 
    waterCostPerRecharge: 0.5  
};

// Inside your main simulation loop function:
// Replace the old energy check with this Hydrolysis Block:

// 1. CALCULATE HYDROLYSIS ENERGY DEMAND
let requiredAtpUnits = waterFootprintRequired * node.baseAtpCostPerLiter * capillaryTension;
term.innerHTML += ` -> Biochemical Check: Hydrolyzing [${requiredAtpUnits.toFixed(1)} ATP → ADP] to overcome soil capillary matrix resistance.\n`;

if (node.atpUnits < requiredAtpUnits) {
    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">METABOLIC EXHAUSTION</span>\n`;
    term.innerHTML += ` -> Feedback: Insufficient active ATP bonds to fuel cellular work. Export dropped.\n`;
} else {
    // Execute Hydrolysis (Dephosphorylation)
    node.atpUnits -= requiredAtpUnits;
    node.adpUnits += requiredAtpUnits; // Spent batteries accumulate

    // 2. THE RECHARGE PENALTY (Cellular Respiration)
    // To turn that ADP back into ATP later, power plants consume cooling water
    let metabolicCoolingLoss = requiredAtpUnits * node.waterCostPerRecharge;
    node.waterCurrent -= (waterFootprintRequired + metabolicCoolingLoss);

    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">METABOLICALLY COMPLETE</span>\n`;
    term.innerHTML += ` -> Molecular Action: Spent [${requiredAtpUnits.toFixed(1)}] ATP. Current Cell Pool: [${node.atpUnits.toFixed(1)} ATP Active / ${node.adpUnits.toFixed(1)} ADP Discharged]\n`;
    term.innerHTML += ` -> Cellular Respiration Water Cost: -${metabolicCoolingLoss.toFixed(1)}L lost to heat/evaporation.\n`;
}
