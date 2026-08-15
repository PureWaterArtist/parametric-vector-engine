# =============================================================================
# COSMIC CENTRIPETAL CONTRACTION: BLACK HOLE MASS-RADIUS COMPILER v1.0
# License: Open Source Hardware Association (OSHWA) Compliant / Copyleft
# Description: Calculates the Event Horizon boundary, volumetric density,
#              and localized gravitational field strength of a collapsed
#              stellar mass using General Relativity constants.
# Format: Strict 80-Character Margin Constraints for Mobile Scannability
# =============================================================================
import math

class CosmicImplosionEngine:
    def __init__(self):
        # UNIVERSAL BEDROCK CONSTANTS
        self.G = 6.67430e-11                           # Gravitational Constant
        self.c = 299792458                             # Speed of Light (m/s)
        self.pi = math.pi                              # Transcendental Constant
        
        # MASS PROFILE REFERENCE VALUES (Kilograms)
        self.mass_earth = 5.9722e24                    # Mass of Earth
        self.mass_sun = 1.9891e30                      # Mass of our Sun
        
    def calculate_schwarzschild_limits(self, mass_kg, object_name_string):
        """
        Calculates the exact radius where escape velocity equals light speed,
        collapsing matter into an absolute centripetal singularity.
        """
        # The Schwarzschild Equation: Rs = (2 * G * M) / c^2
        schwarzschild_radius_meters = (2 * self.G * mass_kg) / (self.c ** 2)
        
        # Calculate the compressed sphere volume: V = (4/3) * pi * r^3
        volume_m3 = (4.0 / 3.0) * self.pi * (schwarzschild_radius_meters ** 3)
        
        # Calculate compressed density: Density = Mass / Volume (kg/m^3)
        density_kg_m3 = mass_kg / volume_m3 if volume_m3 > 0 else float('inf')
        
        # Gravitational Acceleration at the Event Horizon: g = (G * M) / r^2
        surface_g_mjs2 = (self.G * mass_kg) / (schwarzschild_radius_meters ** 2)
        
        return {
            "identity_vector": f"COLLAPSED_{object_name_string.upper()}_SINGULARITY",
            "event_horizon_radius_meters": f"{schwarzschild_radius_meters:.6f}",
            "event_horizon_radius_inches": f"{(schwarzschild_radius_meters * 39.3701):.4f}",
            "compressed_volume_cubic_meters": f"{volume_m3:.4e}",
            "core_volumetric_density_kg_m3": f"{density_kg_m3:.4e}",
            "horizon_gravitational_acceleration_m_s2": f"{surface_g_mjs2:.4e}"
        }

# =============================================================================
# COSMIC METRIC EXECUTION
# =============================================================================
if __name__ == "__main__":
    solver = CosmicImplosionEngine()
    
    # Test Scenario 1: Imploding the entire planet Earth into a black hole
    earth_black_hole = solver.calculate_schwarzschild_limits(
        solver.mass_earth, "Earth"
    )
    
    # Test Scenario 2: Imploding our Sun into a black hole
    sun_black_hole = solver.calculate_schwarzschild_limits(
        solver.mass_sun, "Sol"
    )
    
    import json
    print("=====================================================================")
    print("         GENERAL RELATIVITY: COSMIC CONTRACTION SOLVER               ")
    print("=====================================================================\n")
    
    print("--- SCENARIO A: EARTH PLACED IN AN INFRASTRUCTURAL CRUSH LOOP ---")
    print(f"{json.dumps(earth_black_hole, indent=2)}\n")
    
    print("--- SCENARIO B: OUR SUN PLACED IN AN INFRASTRUCTURAL CRUSH LOOP ---")
    print(f"{json.dumps(sun_black_hole, indent=2)}")
    print("=====================================================================")
      
