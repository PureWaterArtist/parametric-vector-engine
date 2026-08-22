/**
 * Biomimetic Sociology v1.0 - Core Computational Logic Module
 * Decentralized Immune Identity & Metabolic Homeostasis Social Engine
 */

let socialEpoch = 1;

// Node configurations representing diverse cellular entities inside the human macro-organism
let citizenNode = { name: "Healthy Civic Unit (Self-Cell)", wealth: 50, optimal: 500, mhcPassport: "MHC-I_AUTH_0x71A", peptidePayload: "SELF_PROTEIN_VERIFIED" };
let conglomerateNode = { name: "Hyper-Monopoly Block (Malignant Tumor)", wealth: 9500, optimal: 2000, mhcPassport: "MHC-I_AUTH_0x9B4", peptidePayload: "MUTATED_EXPLOITATION_VECTOR" };
let shadowAccountNode = { name: "Offshore Shell Vehicle (Rogue Virus)", wealth: 4500, optimal: 1000, mhcPassport: null, peptidePayload: "UNKNOWN_MALWARE_PAYLOAD" };

function executeSocietyLoop() {
    const term = document.getElementById('terminal');
    term.innerHTML = "=== INITIALIZING BIOMIMETIC SOCIETAL ANALYSIS LIFE RUN ===\n";
    term.innerHTML += ">>> RECEPTOR LINKS: T-Cell & Natural Killer Networks Operational [ONLINE].\n\n";

    // =========================================================================
    // EPOCH 1: AUTONOMOUS CIVIL RECEPTOR SCAN (Healthy Unit Verification)
    // =========================================================================
    term.innerHTML += `[EPOCH 1] CIVIC INTERACTION: Citizen Node attempts standard cross-border trade transaction.\n`;
    term.innerHTML += ` -> T-Cell Receptor Audit: Scanning membrane infrastructure passport [${citizenNode.mhcPassport}].\n`;
    
    if (citizenNode.mhcPassport && citizenNode.peptidePayload === "SELF_PROTEIN_VERIFIED") {
        let nodeIntegrity = 1.0 - Math.pow((citizenNode.wealth / citizenNode.optimal), 2);
        let txFriction = 0.01 * Math.exp(1.0 - nodeIntegrity);
        
        term.innerHTML += ` -> Peptide Readout: Grooved payload contains verified 'Self-Tissue' reporting vector.\n`;
        term.innerHTML += ` -> Dynamic Transaction Fee: Infrastructure friction calculated at low baseline [${txFriction.toFixed(4)}%].\n`;
        term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">SELF-IDENTITY VERIFIED / IMMUNE CLEARANCE PASS</span>\n`;
        term.innerHTML += ` -> System Balance: Civic unit moves resources fluidly; local cell integrity optimal at [${nodeIntegrity.toFixed(2)}].\n`;
    }

    // =========================================================================
    // EPOCH 2: METABOLIC METASTASIS THROTTLING (Tumor Suppression)
    // =========================================================================
    setTimeout(() => {
        term.innerHTML += `\n[EPOCH 2] INDUSTRIAL INTERACTION: Hyper-Monopoly seeks to absorb local community small business sectors.\n`;
        term.innerHTML += ` -> Metabolic Audit: Node wealth (${conglomerateNode.wealth} units) heavily exceeds carrying optimization boundary (${conglomerateNode.optimal} units).\n`;
        
        // Compute degraded metazoan integrity due to tumor hoarding behavior
        let monopolyIntegrity = 1.0 - Math.pow((conglomerateNode.wealth / conglomerateNode.optimal), 2);
        
        term.innerHTML += ` -> Ecosystem Diagnosis: Mass hyper-accumulation identified as a local malignant tumor profile.\n`;
        
        if (monopolyIntegrity < 0) {
            let exponentialFrictionTax = 0.01 * Math.exp(Math.abs(monopolyIntegrity));
            term.innerHTML += ` -> Metabolic Energy Penalty: System friction scales exponentially to a heavy [${exponentialFrictionTax.toFixed(2)}% Overhead Tax Layer].\n`;
            term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-warning">METABOLIC THROTTLING ACTIVATE</span>\n`;
            term.innerHTML += ` -> System Action: Extractive expansion rendered too costly to execute. Capital forced to distribute outward to survival tissue.\n`;
        }

        // =====================================================================
        // EPOCH 3: THE MISSING-SELF ECONOMIC FREEZE (NK Cell Firewall)
        // =====================================================================
        setTimeout(() => {
            term.innerHTML += `\n[EPOCH 3] PATHOLOGY ANOMALY: Offshore Shell Vehicle attempts massive dark money asset routing.\n`;
            term.innerHTML += ` -> Compliance Receptor Audit: Scanning transaction header metadata for valid MHC-I passport barcode...\n`;
            
            // Missing Self Theory Detection Layer
            if (shadowAccountNode.mhcPassport === null) {
                term.innerHTML += ` -> <span class="badge badge-blocked">CRITICAL BIOLOGICAL DEFENSE ANCHOR: ABSENCE OF SELF IDENTIFIED</span>\n`;
                term.innerHTML += ` -> Natural Killer Mechanic: Node has deleted its identification identity chip to evade tracking.\n`;
                term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">MISSING-SELF AUTOMATED LOCKOUT ACTIVATED</span>\n`;
                
                let frozenAssets = shadowAccountNode.wealth;
                shadowAccountNode.wealth = 0; // Absolute liquid amputation
                
                term.innerHTML += ` -> Protective Protective Action: 100% of rogue assets [${frozenAssets} Tokens] instantly frozen and locked inside soil matrices.\n`;
                term.innerHTML += " -> Network Outcome: Systemic corruption path neutralized. Shadow currency vector isolated before hollowing out global infrastructure.\n";
            }
            
            term.innerHTML += `\n=== HOMEOSTATIC AUDIT SUCCESSFUL: Social Macro-Organism Protected from Pathology ===`;
            socialEpoch++;
        }, 4000);
    }, 4000);
}
