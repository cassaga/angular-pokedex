import {AbstractControl, ValidationErrors, ɵElement, ɵValue} from "@angular/forms";

export class Pokemon {
  constructor(
    public name: ɵValue<ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null)))[], null>> | undefined,
    public imageUrl: ɵValue<ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null)))[], null>> | undefined,
    public description: ɵValue<ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null)))[], null>> | undefined
  ) {}
}
