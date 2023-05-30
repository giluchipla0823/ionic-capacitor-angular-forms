import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function duplicateValuesValidator(
  arrayControlName: string,
  matchingControlName: string
): ValidatorFn {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const tickets = formGroup.get(arrayControlName) as FormArray;

    if (tickets && Array.isArray(tickets.value)) {
      const dataSet = new Set();
      const errors = {};

      tickets.controls.forEach((formGroup, index) => {
        const value = formGroup.value;
        const compareValue = value[matchingControlName];

        if (compareValue) {
          if (dataSet.has(compareValue)) {
            formGroup
              .get(matchingControlName)
              .setErrors({ duplicateEmail: true });
            errors[index] = { duplicateEmail: true };
          } else {
            dataSet.add(compareValue);
            // formGroup.get(matchingControlName).setErrors(null);
          }
        }
      });

      console.log({ count: Object.keys(errors).length });

      if (Object.keys(errors).length > 0) {
        return { duplicateEmails: errors };
      }
    }

    return null;
  };
}
