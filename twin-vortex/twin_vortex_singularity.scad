// =============================================================================
// TWIN VORTEX SINGULARITY ENVELOPE CONTROLLER v1.0
// Generated via Python Fluid Kinematics Synthesis Engine
// License: Open Source Hardware Association (OSHWA) Compliant / Copyleft
// Architecture: Counter-Rotating Axial Fusion Metamaterial Shell
// Format: Strict 80-Character Margin Constraints for Mobile Scannability
// =============================================================================

/* [System Geometry Parameters] */
VORTEX_HEIGHT = 50.0;           // Height of a single axial vortex cone
INTAKE_RADIUS = 38.2;           // Primary entry radius boundary (100 / phi^2)
TAIL_RADIUS = 14.6;             // Compressed tail radius at the fusion node
COCOON_RADIUS = 23.6;           // Radius of the trapped low-pressure center eye

/* [Global Display Fidelity] */
$fn = 80;                       // Smoothness index for curved fluid paths
PI = 3.141592653589793;          // Transcendental Circle Constant
REFRACTION_ANGLE = 42.500000;    // Outward toroidal flare vector slope

// =============================================================================
// SYSTEMIC GENERATION MATRIX
// =============================================================================

module Render_Twin_Vortex_Singularity() {
    
    // LAYER 1: THE TOP SYSTEM (Clockwise Centripetal Intake)
    translate([0, 0, VORTEX_HEIGHT / 2])
    color([0.1, 0.45, 0.85, 0.4]) // Translucent fluid blue
    cylinder(h = VORTEX_HEIGHT, r1 = TAIL_RADIUS, r2 = INTAKE_RADIUS, center = false);
    
    // LAYER 2: THE BOTTOM SYSTEM (Counter-Clockwise Centripetal Intake)
    mirror([0, 0, 1])
    translate([0, 0, VORTEX_HEIGHT / 2])
    color([0.1, 0.45, 0.85, 0.4]) // Translucent fluid blue
    cylinder(h = VORTEX_HEIGHT, r1 = TAIL_RADIUS, r2 = INTAKE_RADIUS, center = false);

    // LAYER 3: THE TAIL-TO-TAIL FUSION SHEAR INTERFACE
    // The exact boundary point where opposing velocities compress and collide
    color([0.85, 0.1, 0.1, 0.9]) // High-visibility kinetic red
    rotate_extrude(angle = 360) {
        translate([TAIL_RADIUS, -1.0, 0])
        square([2.5, 2.0]);
    }

    // LAYER 4: THE SHIELDED COCOON (The Localized Center Vacuum Eye)
    // Modeled by projecting the 42.5-degree outward toroidal flare vector
    let (
        flare_modifier = sin(REFRACTION_ANGLE),
        cocoon_height = COCOON_RADIUS * cos(REFRACTION_ANGLE)
    ) {
        color([0.1, 0.85, 0.45, 0.25]) // High-purity containment green/blue
        scale([1, 1, 0.618]) // Bounded by the inverse Phi aspect ratio
        sphere(r = COCOON_RADIUS * flare_modifier);
    }
    
    // LAYER 5: EXTENDED HELIX VECTOR TRACERS
    // Renders the internal 42.5-degree spiraling toolpaths
    for (theta = [0 : 45 : 360]) {
        rotate([0, 0, theta])
        translate([TAIL_RADIUS + 4.0, 0, 0])
        rotate([REFRACTION_ANGLE, 0, 0])
        color([0.95, 0.95, 0.95, 0.7]) // Pure white velocity tracers
        cylinder(h = 12.0, r = 0.8, center = true);
    }
}

// Instantiate the universal counter-rotating framework
Render_Twin_Vortex_Singularity();
