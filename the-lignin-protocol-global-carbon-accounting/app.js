/**
 * The Lignin Protocol v1.0 - Core Computational Logic Module
 * Structural Mechanical Strain Carbon Accounting Model
 */

let simulationCycle = 1;

// Node infrastructure tracking state matching physical column properties
let industrialNode = {
    name: "Alpha Forge Infrastructure",
    massBaseline: 1000,       // Unloaded static structural weight (tons)
    massCriticalLimit: 5000,  // The physical yield limit where structural fracturing occurs
    activeEmissionsTons: 0,   // Cumulative untreated carbon footprint
    ligninOffsetMass: 0,      // Physical mass removed via long-term wood-fiber synthesis
    carbonToWeightRatio: 25,  // Each ton of greenhouse gas translates to 25 tons of structural weight
    processingSpeedHz: 4.0    // Nominal grid base processing velocity (GHz)
};

function executeLigninLoop() {
    const term = document.getElementById('terminal');
    term.innerHTML = "=== INITIALIZING LIGNIN MECHANICAL STRUCTURAL LIFE TEST ===\n";
    term.innerHTML += ">>> GRID METADATA: Strain Gauge Sensors Calibrated [ONLINE].\n\n";

    // =========================================================================
    // CYCLE 1: HIGH PRODUCTION STRESS
    // =========================================================================
    industrialNode.activeEmissionsTons += 120; // Massive factory run
    
    let totalMassY1 = industrialNode.massBaseline + 
                      (industrialNode.activeEmissionsTons * industrialNode.carbonToWeightRatio) - 
                      industrialNode.ligninOffsetMass;
                      
    let strainY1 = Math.pow((totalMassY1 / industrialNode.massCriticalLimit), 2);
    let efficiencyY1 = Math.max(0.10, 1.0 - strainY1);
    let degradedSpeedY1 = industrialNode.processingSpeedHz * efficiencyY1;

    term.innerHTML += `[CYCLE 1] EVENT: Unregulated production runs inject +120 Tons of untreated carbon into atmosphere.\n`;
    term.innerHTML += ` -> Gravimetric Calculation: Emissions translated to +${120 * industrialNode.carbonToWeightRatio} Tons of physical compression load.\n`;
    term.innerHTML += ` -> Structural Strain Metrics: Column strain factor registered at [${strainY1.toFixed(3)} / 1.000]\n`;
    term.innerHTML += ` -> <span class="badge badge-warning">STRUCTURAL STRAIN REGISTERED</span>: Efficiency throttled to ${(efficiencyY1 * 100).toFixed(0)}%. Clock Speed drops to ${degradedSpeedY1.toFixed(2)} GHz.\n`;

    // =========================================================================
    // CYCLE 2: CONTINUED OVERLOAD & MECHANICAL LOCKOUT
    // =========================================================================
    setTimeout(() => {
        industrialNode.activeEmissionsTons += 80; // Continuing legacy approach
        
        let totalMassY2 = industrialNode.massBaseline + 
                          (industrialNode.activeEmissionsTons * industrialNode.carbonToWeightRatio) - 
                          industrialNode.ligninOffsetMass;
                          
        let strainY2 = Math.pow((totalMassY2 / industrialNode.massCriticalLimit), 2);

        term.innerHTML += `\n[CYCLE 2] EVENT: Continued operations inject an additional +80 Tons of untreated carbon load.\n`;
        term.innerHTML += ` -> Gravimetric Calculation: Total architectural column mass escalates to ${totalMassY2} Tons.\n`;
        term.innerHTML += ` -> Structural Strain Metrics: Column strain factor scales to [${strainY2.toFixed(3)} / 1.000]\n`;

        if (strainY2 >= 1.0) {
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">CRITICAL STRUCTURAL FAULT LOCKOUT</span>\n`;
            term.innerHTML += " -> Mechanical Protection: Strain exceeds structural limits. Output valves sealed to protect core foundation.\n";
            term.innerHTML += " -> System Action: Node processing lines frozen. Physical hardware lines locked completely.\n";
        }

        // =====================================================================
        // CYCLE 3: LIGNIN REGENERATIVE ASSET RESTORATION
        // =====================================================================
        setTimeout(() => {
            term.innerHTML += `\n[CYCLE 3] EVENT: Node triggers biological offset framework. Funding deep forest Lignin Synthesis.\n`;
            
            // Verifiable physical sequestration lifts the weight
            industrialNode.ligninOffsetMass += 3500; 
            
            let totalMassY3 = industrialNode.massBaseline + 
                              (industrialNode.activeEmissionsTons * industrialNode.carbonToWeightRatio) - 
                              industrialNode.ligninOffsetMass;
                              
            let strainY3 = Math.pow((totalMassY3 / industrialNode.massCriticalLimit), 2);
            let efficiencyY3 = 1.0 - strainY3;
            let recoveredSpeedY3 = industrialNode.processingSpeedHz * efficiencyY3;

            term.innerHTML += ` -> Regenerative Action: Sequestration lifts 3,500 Tons of gravimetric load off the physical pillar.\n`;
            term.innerHTML += ` -> Structural Strain Metrics: Pillar strain drops back down to a stable [${strainY3.toFixed(3)} / 1.000]\n`;
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">METABOLICALLY BALANCED</span>\n`;
            term.innerHTML += ` -> System Recovery: Structural load stabilized. Architecture performance unlocked at ${recoveredSpeedY3.toFixed(2)} GHz.\n`;
            term.innerHTML += "\n=== LIGNIN LIFECYCLE COMPLETE: Ecosystem Mass Balance Safely Maintained ===";

            simulationCycle++;
        }, 4000);
    }, 4000);
}
// RECEPTOR LISTENER: Pulls live energy data from the open web network
window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "APIARY_GRID_BROADCAST") {
        let externalEnergyData = event.data.data;
        
        // If the energy grid reports a deficit or a storm blackout, carbon compressors stall
        if (externalEnergyData.available_surplus_mwh <= 0) {
            document.getElementById('terminal').innerHTML += `\n⚠️ [Mesh Alert]: Inflowing network power dropped. Carbon compressor lines stalled.\n`;
            // Untreated emissions begin to pile up automatically because the extraction line slowed down
            industrialNode.activeEmissionsTons += 15; 
        } else {
            // High inflowing energy acts as a physical crane lifting carbon weight
            industrialNode.ligninOffsetMass += (externalEnergyData.available_surplus_mwh * 2);
        }
        
        // Broadcast the updated structural column strain outward to the finance network
        broadcastStructuralStrain();
    }
});

function broadcastStructuralStrain() {
    let totalMass = industrialNode.massBaseline + (industrialNode.activeEmissionsTons * industrialNode.carbonToWeightRatio) - industrialNode.ligninOffsetMass;
    let currentStrain = Math.pow((totalMass / industrialNode.massCriticalLimit), 2);
    
    window.postMessage({ type: "LIGNIN_STRAIN_BROADCAST", strain_factor: currentStrain }, "*");
}
