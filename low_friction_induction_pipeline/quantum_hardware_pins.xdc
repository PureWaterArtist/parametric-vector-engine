## =============================================================================
## XILINX ARTIX-7 MASTER HARDWARE CONSTRAINTS ASSIGNMENT SHEET v1.0
## License: Open Source Hardware Association (OSHWA) Compliant / Copyleft
## Platform: Digilent Arty A7-100T / Xilinx XC7A100TCSG324-1
## Format: Strict 80-Character Margin Constraints for Mobile Scannability
## =============================================================================

## 1. System Master Clock Signal Ingress (100 MHz Oscillator Oscillator Node)
set_property -dict { PACKAGE_PIN E3    IOSTANDARD LVCMOS33 } [get_ports { sys_clk }];
create_clock -add -name sys_clk_pin -period 10.00 -waveform {0 5} [get_ports { sys_clk }];

## 2. Inbound Quantum State Signal Carriers (From Conductive TPU Traces)
set_property -dict { PACKAGE_PIN G13   IOSTANDARD LVCMOS33 } [get_ports { state_alpha_in }]; # PMOD Header JA Pin 1
set_property -dict { PACKAGE_PIN B11   IOSTANDARD LVCMOS33 } [get_ports { state_beta_in  }]; # PMOD Header JA Pin 2
set_property -dict { PACKAGE_PIN A11   IOSTANDARD LVCMOS33 } [get_ports { matrix_clock_in }]; # PMOD Header JA Pin 3

## 3. Outbound Holographic Telemetry Paths (To Logic Field Analyzer Array)
set_property -dict { PACKAGE_PIN D12   IOSTANDARD LVCMOS33 } [get_ports { prob_zero_out }]; # PMOD Header JB Pin 1
set_property -dict { PACKAGE_PIN B12   IOSTANDARD LVCMOS33 } [get_ports { prob_one_out  }]; # PMOD Header JB Pin 2
set_property -dict { PACKAGE_PIN A12   IOSTANDARD LVCMOS33 } [get_ports { node_stable_out }]; # PMOD Header JB Pin 3

## 4. Hardware System Safety Intercept Loop (Manual Hardware Override Button)
set_property -dict { PACKAGE_PIN D9    IOSTANDARD LVCMOS33 } [get_ports { manual_intercept_reset }]; # Button 0
