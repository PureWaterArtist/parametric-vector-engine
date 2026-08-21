/**
 * SymbioSys v7.0 - Pure Biomimetic Self-Regulating Network
 * Features: Capillary Tension + Sponge Pipelines + ATP Hydrolysis Engine + Live GIS Layer Triggers
 */

// Initialize open-source Map layer canvas centered across Western Europe
let map = L.map('map').setView([44.0, 4.0], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define precise real-world geographic coordinate points for ecosystem vertices
let almeriaCoords = [36.8381, -2.4597]; // Aridia: Greenhouse Farming Center, Andalusia, Spain
let londonCoords = [51.5074, -0.1278];   // Pluvia: Megacity Consumer Sink, United Kingdom

// Pin geometric marker nodes to the map layout
L.circleMarker(almeriaCoords, { radius: 8, color: '#f85149', fillColor: '#f85149', fillOpacity: 0.8 }).addTo(map)
    .bindPopup("<b>Aridia Node:</b> Almería Agriculture Center, Spain");
L.circleMarker(londonCoords, { radius: 8, color: '#58a6ff', fillColor: '#58a6ff', fillOpacity: 0.8 }).addTo(map)
    .bindPopup("<b>Pluvia Node:</b> London Consumption Sink, United Kingdom");

// Retain visual polyline reference memory array to clear previous steps smoothly
let activeTradeLink = null;

function runSimulation() {
    const term = document.getElementById('terminal');
    term.innerHTML = "=== INITIALIZING SYMBIOSYS HOMEOSTATIC CORE (VERSION 7.0) ===\n";
    term.innerHTML += ">>> GEOSPATIAL MATRIX: Live Map Corridors & GIS Asset Pipeline [ONLINE].\n\n";

    // Clear previous drawing loops from the visual map layout
    if (activeTradeLink) { map.removeLayer(activeTradeLink); }

    // Initial localized resource configuration states
    let aridia = { waterCurrent: 2200, waterFloor: 2000, waterOptimal: 5000, atpUnits: 500, portfolioProduceShare: 0.70 };
    let pluvia = { waterCurrent: 9000, waterFloor: 3000, waterOptimal: 10000, atpUnits: 5000, portfolioProduceShare: 0.40 };

    // =========================================================================
    // PERIOD 1: DROUGHT AND METABOLIC SURGE
    // =========================================================================
    term.innerHTML += "[YEAR 1] SHOCK EVENT: Severe climate anomaly suppresses Aridia aquifer infiltration by 90%.\n";
    term.innerHTML += " -> RESOURCE DEMAND: Pluvia orders 2.0kg fresh cucumbers via Spanish trans-basin conduit.\n";

    let fluidDeficitY1 = aridia.waterCurrent - aridia.waterFloor;
    let tensionY1 = Math.pow((aridia.waterOptimal / fluidDeficitY1), 2);
    let requiredAtpY1 = 2.0 * 353 * aridia.portfolioProduceShare * 1.5 * tensionY1;

    term.innerHTML += ` -> Capillary Tension: [${tensionY1.toFixed(2)}x Dynamic Friction]\n`;
    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">APPROVED WITH HYDROLYSIS OVERHEAD PREMIUM</span>\n`;
    term.innerHTML += ` -> System Action: Pluvia pays dynamic ATP surge tax to balance Aridia's cell ecosystem metrics.\n`;

    // DRAW VISUAL MAP LINE STEP 1: Orange route indicating intense pressure/premiums
    activeTradeLink = L.polyline([almeriaCoords, londonCoords], { color: '#d29922', weight: 4, dashArray: '5, 10' }).addTo(map);
    
    // Quick delayed visual simulation thread to mimic multi-year transitions
    setTimeout(() => {
        // =====================================================================
        // PERIOD 2: METABOLIC LOCKDOWN FIREWALL
        // =====================================================================
        term.innerHTML += `\n[YEAR 2] SHOCK EVENT: Multi-Year Drought Continues. Aridia aquifer drops to edge threshold.\n`;
        term.innerHTML += " -> RESOURCE DEMAND: Pluvia requests identical 2.0kg Cucumber mass export contract.\n";

        // Push values down into extreme thresholds to force natural capillary choke point
        aridia.waterCurrent = 2020; 
        let fluidDeficitY2 = aridia.waterCurrent - aridia.waterFloor;
        let tensionY2 = Math.pow((aridia.waterOptimal / fluidDeficitY2), 2);

        term.innerHTML += ` -> Capillary Tension: [${tensionY2.toFixed(2)}x Dynamic Friction Scale]\n`;
        term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">BLOCKED VIA LOCAL METABOLIC FIREWALL</span>\n`;
        term.innerHTML += " -> System Action: Polyline route frozen. Trans-continental export paths shut down to save human urban water pools.\n";

        // REDRAW VISUAL MAP LINE STEP 2: Crimson red route indicating absolute metabolic lockdown
        map.removeLayer(activeTradeLink);
        activeTradeLink = L.polyline([almeriaCoords, londonCoords], { color: '#f85149', weight: 5 }).addTo(map);

        setTimeout(() => {
            // =================================================================
            // PERIOD 3: ADAPTIVE SYMBIOSIS EQUILIBRIUM RECOVERY
            // =================================================================
            term.innerHTML += `\n[YEAR 3] RECIPROCAL WAVE: Atmospheric deluge anomaly refilling Aridia aquifer reservoirs.\n`;
            term.innerHTML += " -> SYSTEM ACTION: Aridia mutates farming strategy. Shifts acreage to export low-water crops.\n";
            term.innerHTML += " -> TRANSACTION STATUS: <span class="badge badge-subsidy">MUTUALISTIC EQUILIBRIUM ACHIEVED</span>\n";
            term.innerHTML += "\n=== SIMULATION CYCLE SUCCESSFUL: Distributed Spatial Grid Reaches Balanced Equilibrium ===";

            // REDRAW VISUAL MAP LINE STEP 3: Stable, solid blue/green indicating homeostatic balancing complete
            map.removeLayer(activeTradeLink);
            activeTradeLink = L.polyline([almeriaCoords, londonCoords], { color: '#3fb950', weight: 4 }).addTo(map);

        }, 4000);
    }, 4000);
}
