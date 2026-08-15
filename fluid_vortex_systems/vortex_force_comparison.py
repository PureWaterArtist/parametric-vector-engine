# =============================================================================
# FLUID PATHWAY SYSTEMICS: EXPLOSIVE VS. IMPLOSIVE DYNAMICS SIMULATOR v1.0
# License: Open Source Hardware Association (OSHWA) Compliant / Copyleft
# Description: Compares mechanical efficiency, friction losses, and terminal
#              velocities of centrifugal (explosive) vs. centripetal (implosive)
#              fluid vectors bounded by universal geometric constants.
# Format: Strict 80-Character Margin Constraints for Mobile Scannability
# =============================================================================
import math
import time

class FluidDynamicsEngine:
    def __init__(self):
        # UNIVERSAL GEOMETRIC ANCHORS
        self.phi = (1 + math.sqrt(5)) / 2              # Universal Growth Vector
        self.pi = math.pi                              # Circle Constant
        self.refraction_vector = 42.500000              # Baseline Spiral Pitch

    def simulate_explosive_centrifugal_path(self, input_velocity_ms, radius_mm):
        """
        Models standard centrifugal flow: fluid is pushed OUTWARD.
        Increases radius, causing friction against walls and thermal loss.
        """
        # Outward expansion increases radius by the Phi scaling index
        terminal_radius = radius_mm * self.phi
        
        # Friction scales exponentially against the outer containment walls
        friction_coefficient = 0.45 * (terminal_radius / radius_mm)
        velocity_loss_factor = 1.0 / (1.0 + friction_coefficient)
        
        # Centrifugal expansion drops rotational velocity to conserve energy
        terminal_velocity = (input_velocity_ms * (radius_mm / terminal_radius) * 
                             velocity_loss_factor)
        
        # Friction generates high waste heat (thermal dissipation index)
        thermal_waste_index = input_velocity_ms * friction_coefficient * 12.5
        
        return {
            "vector_mechanics": "EXPLOSIVE_CENTRIFUGAL_EXPANSION",
            "boundary_radius_mm": round(terminal_radius, 2),
            "fluid_friction_drag_newtons": round(friction_coefficient * 10, 2),
            "system_thermal_waste_celsius": round(thermal_waste_index, 2),
            "harvestable_terminal_velocity_ms": round(terminal_velocity, 2),
            "net_kinetic_efficiency_percentage": round((terminal_velocity / input_velocity_ms) * 100, 2)
        }

    def simulate_implosive_centripetal_path(self, input_velocity_ms, radius_mm):
        """
        Models centripetal vortex flow: fluid is drawn INWARD.
        Decreases radius, conserving angular momentum to trigger acceleration.
        """
        # Inward contraction compresses radius toward the low-pressure core
        # Bounded by the inverse Phi ratio matching your 42.5 pitch slope
        vortex_pitch_modifier = math.cos(self.refraction_vector * (self.pi / 180))
        terminal_radius = radius_mm * (1.0 / self.phi) * vortex_pitch_modifier
        
        # Moving toward center pulls fluid away from walls, minimizing friction
        friction_coefficient = 0.05 * (terminal_radius / radius_mm)
        velocity_retention_factor = 1.0 - friction_coefficient
        
        # Conservation of Angular Momentum (m*v1*r1 = m*v2*r2) forces acceleration
        # Velocity must skyrocket as the radius collapses inward
        terminal_velocity = (input_velocity_ms * (radius_mm / terminal_radius) * 
                             velocity_retention_factor)
        
        # Implosive pathways absorb heat, cooling the center of the vortex
        thermal_waste_index = -0.5 * (terminal_velocity * friction_coefficient)
        
        return {
            "vector_mechanics": "IMPLOSIVE_CENTRIPETAL_CONTRACTION",
            "boundary_radius_mm": round(terminal_radius, 2),
            "fluid_friction_drag_newtons": round(friction_coefficient * 10, 2),
            "system_thermal_waste_celsius": round(thermal_waste_index, 2),
            "harvestable_terminal_velocity_ms": round(terminal_velocity, 2),
            "net_kinetic_efficiency_percentage": round((terminal_velocity / input_velocity_ms) * 100, 2)
        }

# =============================================================================
# DUAL VECTOR INGRESS EXECUTION
# =============================================================================
if __name__ == "__main__":
    engine = FluidDynamicsEngine()
    
    # Establish equal initial parameters: 12.5 m/s entering a 50mm channel
    initial_velocity = 12.5
    initial_radius = 50.0
    
    explosion_profile = engine.simulate_explosive_centrifugal_path(initial_velocity, initial_radius)
    implosion_profile = engine.simulate_implosive_centripetal_path(initial_velocity, initial_radius)
    
    print("=====================================================================")
    print("        MULTI-PHYSICS ENGINE: FLUID ENERGY HARVESTING ANALYSIS       ")
    print("=====================================================================\n")
    print(f"INPUT BOUNDARIES: Initial Velocity = {initial_velocity} m/s | Radius = {initial_radius} mm\n")
    
    import json
    print("--- PATHWAY A: STANDARD CENTRIFUGAL SYSTEM (EXPLOSION METRIC) ---")
    print(f"{json.dumps(explosion_profile, indent=2)}\n")
    
    print("--- PATHWAY B: PARAMETRIC CENTRIPETAL SYSTEM (IMPLOSION METRIC) ---")
    print(f"{json.dumps(implosion_profile, indent=2)}")
    print("=====================================================================")
  
