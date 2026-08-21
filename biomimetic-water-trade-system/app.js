/**
 * SymbioSys v2.1 Core Algorithmic Logic
 * Decentralized Ecosystem Simulation Engine with Stochastic Volatility
 */

function runSimulation() {
    const term = document.getElementById('terminal');
    term.innerHTML = "=== INITIALIZING BIOMIMETIC DECENTRALIZED SYSTEM SIMULATION ===\n";
    term.innerHTML += ">>> RECEPTOR NODE METADATA: Dynamic Climate Shock Variables Operational [ONLINE].\n";
    
    // Upgraded decentralized node object states
    let aridia = { name: "Aridia", blue: 2100, floor: 2000, optimal: 5000, h2oCredits: 0, health: 0.20 };
    let pluvia = { name: "Pluvia", blue: 9000, floor: 3000, optimal: 10000, h2oCredits: 20, health: 0.90 };
    
    // =========================================================================
    // YEAR 1: Sudden Climate Drop
    // =========================================================================
    let climate_Y1 = 0.10; 
    term.innerHTML += `\n[YEAR 1] CLIMATE SHOCK: Severe Drought hits Aridia Node (Climate Factor &DoubleC;: ${climate_Y1}).\n`;
    term.innerHTML += " -> RESOURCE DEMAND: Pluvia requests 2.0kg Cucumbers (High physical mass extraction).\n";
    
    // Calculate crashed health due to sudden drought impact
    aridia.health = Math.max(0.05, aridia.health * climate_Y1); 
    let frictionY1 = Math.exp(pluvia.health - aridia.health).toFixed(2);
    
    term.innerHTML += ` -> Local Receptor Calculation: Friction Coefficient forced to [${frictionY1}x]\n`;
    term.innerHTML += ` -> Network Mechanism: Trade authorized exclusively under premium structural overhead conditions.\n`;
    aridia.h2oCredits += 10.0; // Captures dynamic drought premium payout
    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">APPROVED WITH DROUGHT PREMIUM</span>\n`;
    term.innerHTML += ` -> Node Balance: Aridia reserves hit critical, H2O-Credits increased to [${aridia.h2oCredits.toFixed(1)}] to support infrastructure.\n`;
    
    // =========================================================================
    // YEAR 2: Deep Crisis Mode
    // =========================================================================
    let climate_Y2 = 0.10;
    term.innerHTML += `\n[YEAR 2] CLIMATE SHOCK: Multi-Year Extreme Drought Persists (Climate Factor &DoubleC;: ${climate_Y2}).\n`;
    term.innerHTML += " -> RESOURCE DEMAND: Pluvia attempts additional 2.0kg Cucumber supply extraction.\n";
    
    aridia.health = 0.02; // Critical systemic biological duress
    let frictionY2 = Math.exp(pluvia.health - aridia.health).toFixed(2);
    term.innerHTML += ` -> Local Receptor Calculation: Friction Multiplier scales to an unpayable hyper-inflationary [${frictionY2}x]\n`;
    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">BLOCKED: METABOLIC FIREWALL ACTIVATED</span>\n`;
    term.innerHTML += " -> Protective Action: Local firewall isolates node boundaries completely to preserve human survival minimums.\n";
    term.innerHTML += " -> System Routing Network: Order package automatically re-routed to stable global reservoirs.\n";
    
    // =========================================================================
    // YEAR 3: The Recovery Wave
    // =========================================================================
    let climate_Y3 = 1.50; // Heavy rainfall anomaly
    term.innerHTML += `\n[YEAR 3] CLIMATE SHOCK: Atmospheric River Deluge Recharge Event (Climate Factor &DoubleC;: ${climate_Y3}).\n`;
    aridia.blue += 2500; // Hydrological systems aggressively refill aquifers
    aridia.health = 0.75; // Swift complete physical and metabolic recovery
    
    let frictionY3 = Math.exp(aridia.health - pluvia.health).toFixed(2);
    term.innerHTML += " -> RECIPROCAL ACTION: Aridia activates saved H2O-Credits to import low-water sustenance grains from Pluvia.\n";
    term.innerHTML += ` -> Local Receptor Calculation: Friction Coefficient drops to highly subsidized [${frictionY3}x]\n`;
    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-subsidy">STABLE RECIPROCAL EXCHANGE</span>\n`;
    term.innerHTML += ` -> Node Balance Matrix: Aridia Metabolic Health reaches stable equilibrium at [${aridia.health.toFixed(2)}]\n`;
    
    term.innerHTML += "\n=== SIMULATION CYCLE SUCCESSFUL: Distributed Grid Survives Catastrophic Stress ===";
}
