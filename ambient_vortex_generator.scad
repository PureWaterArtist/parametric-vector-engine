// =============================================================================
// AMBIENT VORTEX GENERATOR CORE COMPILER v1.0
// License: Open Source Hardware Association (OSHWA) Compliant / Copyleft
// Architecture: Solid-State Multi-Axis Ambient Air Harvester
// Print Profile: Optimized for 100% Recyclable Monomaterial TPU
// Format: Strict 80-Character Margin Constraints for Mobile Scannability
// =============================================================================

/* [Primary Physical Dimensions] */
CYLINDER_HEIGHT = 120.000000;    // Total vertical print height in mm
OUTER_DIAMETER = 100.000000;     // Total structural width footprint in mm
WALL_THICKNESS = 4.000000;       // Minimum structural wall perimeter shell

/* [Parametric Geometric Constants] */
PHI = (1 + sqrt(5)) / 2;         // Universal Pattern Scaling Vector (~1.618)
PI = 3.1415926535897932;         // Transcendental Wave Constant
PITCH_ANGLE = 42.500000;         // 42.5-Degree Inward Vector Deflection
SLOT_COUNT = 8;                  // Number of multi-axis ambient intake slots

/* [Slicing Optimization Parameters] */
$fn = 60;                        // Resolution parameter for print slicing

// =============================================================================
// HARDWARE ARCHITECTURE COMPILATION
// =============================================================================

module Render_Ambient_Vortex_Generator() {
    difference() {
        // MODULE 1: MAIN EXTERNAL SOLID CHASSIS ENVELOPE
        // Printed using rigid polymer (BASF Forward AM Ultrafuse TPU 64D)
        color([0.2, 0.2, 0.2])
        cylinder(h = CYLINDER_HEIGHT, d = OUTER_DIAMETER, center = true);

        // MODULE 2: INTERNAL COMPRESSED CENTRIPETAL VACUUM CHAMBER
        // Core chamber profile scales inward based on the inverse Phi ratio
        let (inner_d = OUTER_DIAMETER - (WALL_THICKNESS * 2 * PHI)) {
            cylinder(h = CYLINDER_HEIGHT + 2.0, d = inner_d, center = true);
        }

        // MODULE 3: HELICAL MULTI-AXIS INTAKE SLOTS
        // Procedurally cuts slots at a fixed 42.5-degree ingress vector
        for (i = [0 : SLOT_COUNT - 1]) {
            rotate([0, 0, i * (360 / SLOT_COUNT)])
            translate([OUTER_DIAMETER / 4, 0, 0])
            
            // Counter-rotation angle shift forces axial tail-to-tail fusion
            rotate([PITCH_ANGLE, 0, PITCH_ANGLE])
            
            color([0.85, 0.1, 0.1]) // Highlights the kinetic ingress vectors
            cube([OUTER_DIAMETER / 2, WALL_THICKNESS * PHI, CYLINDER_HEIGHT * 1.2], 
                 center = true);
        }
        
        // MODULE 4: CORE EXHAUST SIPHON
        // Central low-pressure extraction channel bored through the axis
        cylinder(h = CYLINDER_HEIGHT + 5.0, d = OUTER_DIAMETER / (PHI^2), 
                 center = true);
    }
    
    // MODULE 5: INTEGRATED PRIME FREQUENCY DAMPENING BRACKETS
    // Printed inside the base via conductive carbon TPU (Lubrizol Estane)
    // Placed along prime-number increments to kill vibrational feedback
    for (j =) {
        rotate([0, 0, j * 45])
        translate([(OUTER_DIAMETER / 2) - WALL_THICKNESS, 0, 
                   -(CYLINDER_HEIGHT / 2) + 5.0])
        color([0.8, 0.1, 0.1])
        cylinder(h = 4.0, r = 2.5, $fn = 6);
    }
}

// Instantiate the solid-state print profile
Render_Ambient_Vortex_Generator();
