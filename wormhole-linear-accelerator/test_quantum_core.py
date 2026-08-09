# =============================================================================
# COGNITIVE AUTOMATION PIPELINE: QUANTUM CORE UNIT TEST SUITE v1.0
# License: Open Source Hardware Association (OSHWA) Compliant / Copyleft
# Description: Automates the programmatic verification of qubit state vectors
#              to guarantee mathematical execution integrity inside the CI loop.
# Format: Strict 80-Character Margin Constraints for Mobile Scannability
# =============================================================================
import unittest
from quantum_simulation_twin import QuantumWormholeSimulator

class TestQuantumWormholeCore(unittest.TestCase):
    def setUp(self):
        """Initializes the core simulation node architecture."""
        self.sim = QuantumWormholeSimulator()

    def test_prime_node_isolation(self):
        """Verifies that prime number nodes pass the anti-resonance filter."""
        self.assertTrue(self.sim._is_prime(7))
        self.assertFalse(self.sim._is_prime(4))

    def test_teleportation_probability_amplitudes(self):
        """Confirms that the total output probability vectors equal exactly 1."""
        telemetry = self.sim.execute_traversable_teleportation(
            sequence_node_id=7, input_alpha=0.6, input_beta=0.8
        )
        probs = telemetry["holographic_exit_probabilities"]
        total_probability = probs["probability_amplitude_zero"] + probs["probability_amplitude_one"]
        
        # Total quantum probability must equal 100% (1.0) inside a closed system
        self.assertAlmostEqual(total_probability, 1.0, places=4)

if __name__ == "__main__":
    unittest.main()
  
