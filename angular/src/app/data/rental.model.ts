import { RentalUnit } from './rental-unit.model';

/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * rentalUnit: RentalUnit;
 * ```
 */
export class Rental {
  id: string;
  name: string;
  rentalUnit: RentalUnit;
}
