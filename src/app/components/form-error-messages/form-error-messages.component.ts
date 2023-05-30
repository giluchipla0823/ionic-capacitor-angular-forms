import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error-messages',
  templateUrl: './form-error-messages.component.html',
  styleUrls: ['./form-error-messages.component.scss'],
})
export class FormErrorMessagesComponent {
  @Input() control!: AbstractControl;
  @Input() customErrors: Record<string, string> = {};

  private errorMessagesData: Record<string, Function> = {
    required: () => 'Campo requerido',
    email: () => 'El campo debe ser un email válido',
    minlength: ({ requiredLength, actualLength }) =>
      `El campo debe tener mínimo ${requiredLength} caracteres`,
  };

  constructor() {}

  get errorMessage(): string | null {
    for (const error in this.control?.errors) {
      if (
        this.control.errors.hasOwnProperty(error) &&
        (this.control.touched ||
          (this.control.asyncValidator && !this.control.pristine))
      ) {
        if (this.customErrors?.hasOwnProperty(error)) {
          return this.customErrors[error];
        }

        if (this.errorMessagesData.hasOwnProperty(error)) {
          return this.errorMessagesData[error](this.control?.errors[error]);
        }

        return 'Error no definido';
      }
    }

    return null;
  }
}
