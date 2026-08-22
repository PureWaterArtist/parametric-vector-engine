/**
 * Mycorrhizal DeFi v1.0 - Core Computational Logic Module
 * Ecosystem Canopy Health Symbiosis Asset Allocation Engine
 */

let marketEpoch = 1;

// Node configurations modeling different scale trees inside the tokenized forest network
let saplingNode = { name: "Shaded Sapling Pool (Low Health)", liquidity: 150, optimal: 1000, baseFee: 0.02 };
let apexNode = { name: "Dominant Canopy Tree (Hyper-Pool)", liquidity: 8500, optimal: 5000, baseFee: 0.02 };

function executeMycoLoop() {
    const term = document.getElementById('terminal');
    term.innerHTML = "=== INITIALIZING MYCORRHIZAL DEFI SYMBIO-LOGIC CORE ===\n";
    term.innerHTML += ">>> NETWORK MATRIX: Fungal Mycelial Receptors Active [ONLINE].\n\n";

    // Compute original metabolic carrying capacities
    saplingNode.health = saplingNode.liquidity / saplingNode.optimal; // Result: 0.15 (Saddled with stress)
    apexNode.health = apexNode.liquidity / apexNode.optimal;       // Result: 1.70 (Over-saturated)

    // =========================================================================
    // CYCLE 1: EXTRACTIVE CAPITAL FLOW DETECTED (Predatory Attempt)
    // =========================================================================
    term.innerHTML += `[CYCLE 1] INTENT: Speculative arbitrage pool attempts to drain 100 tokens out of Shaded Sapling and route to Apex Tree.\n`;
    term.innerHTML += ` -> Local Receptor Check: Sapling Health is dangerously low at [${saplingNode.health.toFixed(2)}], Apex is over-saturated at [${apexNode.health.toFixed(2)}].\n`;

    // Friction scales exponentially based on the divergence of health scores
    let frictionMultiplierY1 = Math.exp(apexNode.health - saplingNode.health);
    let totalTransactionFeeY1 = 100 * saplingNode.baseFee * frictionMultiplierY1;

    term.innerHTML += ` -> Symbiosis Index Friction: Fungal web triggers defensive premium of [${frictionMultiplierY1.toFixed(2)}x Friction Units].\n`;
    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-warning">HEAVY TRANSACTION FRICTION ENFORCED</span>\n`;
    term.innerHTML += ` -> Ledger Output: Draining the sapling requires an unpayable transaction tax fee of ${totalTransactionFeeY1.toFixed(1)} tokens. Extractive arbitrage priced out naturally.\n`;

    // =========================================================================
    // CYCLE 2: REGENERATIVE MUTUALISTIC INFLOW (Symbiotic Flow)
    // =========================================================================
    setTimeout(() => {
        term.innerHTML += `\n[CYCLE 2] INTENT: Liquidity provider routes 500 tokens from the hyper-saturated Apex Tree down to Shaded Sapling.\n`;
        
        // Reverse direction: High health to low health creates a negative exponent fraction
        let frictionMultiplierY2 = Math.exp(saplingNode.health - apexNode.health);
        let totalTransactionFeeY2 = 500 * apexNode.baseFee * frictionMultiplierY2;

        // Balance changes
        apexNode.liquidity -= 500;
        saplingNode.liquidity += 500;
        
        // Recompute health scores after balanced redistribution
        saplingNode.health = saplingNode.liquidity / saplingNode.optimal;
        apexNode.health = apexNode.liquidity / apexNode.optimal;

        term.innerHTML += ` -> Symbiosis Index Friction: System opens zero-resistance pathway scaled to [${frictionMultiplierY2.toFixed(3)}x Friction Units].\n`;
        term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">MUTUALISTIC EQUILIBRIUM CONDUIT UNLOCKED</span>\n`;
        term.innerHTML += ` -> Ledger Output: Transaction cleared with a negligible subsidy fee of just ${totalTransactionFeeY2.toFixed(2)} tokens.\n`;
        term.innerHTML += ` -> Canopy Balance Updated: Sapling Pool liquidity raised to ${saplingNode.liquidity} tokens. New Health: [${saplingNode.health.toFixed(2)}].\n`;

        // =====================================================================
        // CYCLE 3: BIO-SHOCK PANIC CRASH & EXIT SAFEGUARD LOCKDOWN
        // =====================================================================
        setTimeout(() => {
            term.innerHTML += `\n[CYCLE 3] MARKET CRASH ANOMALY: Panic liquidation waves strike the network. Speculators drop Sapling pool to 40 tokens.\n`;
            
            saplingNode.liquidity = 40;
            saplingNode.health = saplingNode.liquidity / saplingNode.optimal; // Crashes to 0.04
            
            term.innerHTML += ` -> Local Receptor Check: Sapling health hits absolute terminal boundary line at [${saplingNode.health.toFixed(2)}].\n`;

            if (saplingNode.health <= 0.05) {
                term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">CRITICAL ECOSYSTEM RECEPTOR SHOCK DETECTED</span>\n`;
                term.innerHTML += ` -> Emergency Mechanism Activated: Fungal web deploys an <span class="badge badge-blocked">ECOLOGICAL EXIT LOCKDOWN TARIFF</span>.\n`;
                term.innerHTML += " -> Protective Action: Asset transfer friction scales instantly to infinity ($\infty$). Exit corridors completely sealed.\n";
                term.innerHTML += " -> Network Outcome: Speculative capital flight blocked completely. Sapling pool assets anchored to protect forest core floor.\n";
            }

            term.innerHTML += "\n=== MYCORRHIZAL DEFI LEDGER COMPLETED: Long-Term Canopy Resilience Maintained ===";
            marketEpoch++;
        }, 4000);
    }, 4000);
}
