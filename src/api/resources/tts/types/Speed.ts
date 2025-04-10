/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Cartesia from "../../../index";

/**
 * Either a number between -1.0 and 1.0 or a natural language description of speed.
 *
 * If you specify a number, 0.0 is the default speed, -1.0 is the slowest speed, and 1.0 is the fastest speed.
 */
export type Speed = Cartesia.NumericalSpecifier | Cartesia.NaturalSpecifier;
