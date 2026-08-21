---

### 🏛️ System Pillars & Variables

*   **The Ledger Layer:** Disaggregated vector engine tracking embedded `[Green, Blue, Grey]` water footprints per commodity item.
*   **The Network Topology:** A directional graph ($G = (V, E)$) where nodes ($V$) represent decentralized regional metabolic processors and edges ($E$) act as autonomous shipping conduits.
*   **The Constraint Engine:** Algorithmic firewalls continuously protecting local baseline groundwater recharge minimums.
*   **The Tokenized Currency Grid:** A zero-fiat network functioning entirely on localized **Hydrological Credits (H2O-C)** and **Regenerative Asset Tokens (RATs)**.

---

### 🧮 Mathematical Framework

#### 1. Node Metabolic Health ($H_i$)
Governs a regional processor's operational state and willingness to export to the international grid:
$$H_i = \left( \frac{W_{\text{current}} - W_{\text{floor}}}{W_{\text{optimal}}} \right) \cdot \left( 1 - \text{Deficit}_{\text{nutrition}} \right)$$

#### 2. Autonomous Edge Friction ($F_{ij}$)
Calculates transaction cost multipliers between exporter $i$ and importer $j$ dynamically, ensuring protection against predatory economic drain:
$$F_{ij} = e^{(H_j - H_i)}$$

#### 3. True Commodity Export Valuation ($C_{\text{total}}$)
Internalizes downstream environmental depletion penalties directly into transaction costs:
$$C_{\text{total}} = C_{\text{base}} + (V_g \cdot P_g) + (V_b \cdot P_b \cdot F_{ij}) + (V_{gr} \cdot P_{gr})$$

---

### 📊 Baseline Commodity Profile Matrix
Standard system values representing the default embedded liters required per single unit kilogram ($L/kg$):

| Commodity | Total Volume ($L/kg$) | 🟢 Green % | 🔵 Blue % | ⚪ Grey % | 💧 Mass Water % | Primary Risk Vector |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Beef** | 15,400 | 94% | 4% | 2% | 0% | Localized aquifer draw |
| **Wheat** | 1,800 | 70% | 19% | 11% | 0% | Rain pattern vulnerability |
| **Tomatoes** | 214 | 40% | 50% | 10% | 94% | Trans-basin mass loss |
| **Cucumbers**| 353 | 35% | 55% | 10% | 96% | Intensive irrigation depletion |

---

### 🔄 Multi-Period Verification Loop Execution Result
The underlying autonomous logic undergoes validation via a 3-cycle stress run tracking an asymmetric exchange between a water-scarce entity (**Aridia**) and an asset-flush sink (**Pluvia**):

*   **Year 1: High Stress Export Verification**
    *   *Event:* Pluvia requests 2.0kg Cucumbers from Aridia.
    *   *Friction Response:* Registers at **2.01x** penalty due to divergent health metrics.
    *   *Loop Closure Action:* Pluvia is programmatically forced to remit 0.96L/kg physical technology offsets (RAT tokens) back to the source.
    *   *Result:* ✅ Approved. Aridia Health rises from $0.20 \to 0.40$.

*   **Year 2: Local Firewall Activation**
    *   *Event:* Pluvia increases demand to 5.0kg Tomatoes from Aridia.
    *   *Friction Response:* Multiplier spikes to **7.39x**.
    *   *Result:* 🚫 **BLOCKED VIA LOCAL METABOLIC FIREWALL**. The proposed trade threatens Aridia's internal environmental floor ($W_{\text{floor}}$); the edge routing protocol instantly drops the contract.

*   **Year 3: Adaptive Mutualism Pivot**
    *   *Event:* Aridia uses its stored H2O-Credits to import 3.0kg Cucumbers from Pluvia.
    *   *Friction Response:* Drops to a subsidized **0.37x** level.
    *   *Result:* 🌟 **OPTIMAL TRANSACTION**. Production safely shifts to the surplus node, balancing nutrition arrays while stabilizing Aridia's metabolic safety baseline to a resilient **0.78**.

---

### 🛠️ Interactive Deployment
The system architecture includes an interactive client-side execution environment built entirely into a standalone, single-file frontend template.

#### Local Execution
1. Download or clone this repository.
2. Open `index.html` directly in any updated modern desktop web browser.
3. Click **Execute System Loop** to analyze live state logs.

#### GitHub Pages Deployment
1. Navigate to your GitHub repository settings panel.
2. Under the **Pages** menu on the left sidebar, locate **Build and deployment**.
3. Set the source branch configuration route to `main` (or `master`) and target the root `/` folder directory.
4. Click **Save**. Your simulator interface will automatically launch live on the standard web grid within minutes.

---
*Developed as an experimental alternative model for planetary resource-network design.*
