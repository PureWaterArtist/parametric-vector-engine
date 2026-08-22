/**
 * The Apiary Mesh v1.0 - Core Computational Logic Module
 * Decentralized Autonomous Waggle Frequency Gradient Energy Engine [1]
 */

let hiveEpoch = 1;

// Decentralized micro-node agent configurations across the local grid network
let nodeConsumer = { name: "Sub-Station Forager (Consumer)", energyCurrent: 120, energyOptimal: 1000, maxWaggleHz: 120 };
let nodeProducer = { name: "Solar Canopy Drone (Producer)", energyCurrent: 1500, energyOptimal: 1200, maxWaggleHz: 120 };

function executeApiaryLoop() {
    const term = document.getElementById('terminal');
    term.innerHTML = "=== INITIALIZING APIARY MESH HOMEOSTATIC CORE SIMULATION ===\n";
    term.innerHTML += ">>> NETWORK MATRIX: Localized Grid Receptors Operational [ONLINE].\n\n";

    // =========================================================================
    // CYCLE 1: LOCAL ENERGY DEFICIT & WAGGLE ACTIVATION [1]
    // =========================================================================
    let deficitC = nodeConsumer.energyOptimal - nodeConsumer.energyCurrent;
    let waggleFreqC = Math.pow((deficitC / nodeConsumer.energyOptimal), 2) * nodeConsumer.maxWaggleHz;

    term.innerHTML += `[CYCLE 1] EVENT: Peak localized peak cooling demand causes sub-station reserves to plunge down to 120 MWh.\n`;
    term.innerHTML += ` -> Local Receptor Metric: Energy Deficit registered at +${deficitC} Units.\n`;
    term.innerHTML += ` -> Biological Mechanism: Consumer Node initiates an autonomous broadcast dance at [${waggleFreqC.toFixed(1)} Hz Waggle Speed] [1].\n`;

    // =========================================================================
    // CYCLE 2: GRADIENT OPTIMIZATION POWER FLOW [1]
    // =========================================================================
    setTimeout(() => {
        let deficitP = nodeProducer.energyOptimal - nodeProducer.energyCurrent; // Negative indicates deep surplus
        let waggleFreqP = 0; // Surplus nodes have a zero waggle frequency index

        // Calculate dynamic directional grid flow across the steepest local gradient
        let localizedMeshGradient = waggleFreqC - waggleFreqP;
        let transmissiblePowerUnits = localizedMeshGradient * 4.5; // Scaled power line transfer clearance

        nodeConsumer.energyCurrent += transmissiblePowerUnits;
        nodeProducer.energyCurrent -= transmissiblePowerUnits;

        term.innerHTML += `\n[CYCLE 2] INTERACTION: Neighboring Solar Drone Node detects structural gradient delta of [${localizedMeshGradient.toFixed(1)} Gradient Units].\n`;
        term.innerHTML += ` -> Kinetic Flow Action: Power automatically shifts down the path of least resistance toward the dancing node [1].\n`;
        term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">SWARM OPTIMAL HOMEEOSTASIS</span>\n`;
        term.innerHTML += ` -> Grid Update: Discharged ${transmissiblePowerUnits.toFixed(1)} MWh. Consumer Node balance restored to ${nodeConsumer.energyCurrent.toFixed(1)} MWh.\n`;

        // =====================================================================
        // CYCLE 3: CLIMATE SHOCK & AUTONOMOUS EDGE SHEDDING [1]
        // =====================================================================
        setTimeout(() => {
            term.innerHTML += `\n[CYCLE 3] MACRO SHOCK EVENT: Extreme lightning strike causes sudden, catastrophic high-voltage hardware cross-short.\n`;
            
            // Artificial extreme surge delta to trigger boundary threshold gauges
            let criticalSurgeGradient = 250.0; 
            term.innerHTML += ` -> Local Receptor Calculation: Local edge gradient explodes to an un-mitigatable [${criticalSurgeGradient.toFixed(1)} Gradient Units].\n`;

            if (criticalSurgeGradient >= 150.0) {
                term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">CRITICAL SHOCK DETECTED</span>\n`;
                term.innerHTML += ` -> Biomimetic Defense Trigger: Local boundary switches instantly to an <span class="badge badge-blocked">AUTONOMOUS EDGE SHEDDING</span> routine [1].\n`;
                term.innerHTML += " -> Protective Action: Local line junctions blown open instantly to amputate the damaged conduit from the swarm.\n";
                term.innerHTML += " -> Grid Outcome: Cascading regional blackout averted. 98.4% of the surrounding hive mesh remains fully operational.\n";
            }

            term.innerHTML += "\n=== APIARY MESH LIFECYCLE COMPLETED: Swarm Resiliency Maintained ===";
            hiveEpoch++;
        }, 4000);
    }, 4000);
}
