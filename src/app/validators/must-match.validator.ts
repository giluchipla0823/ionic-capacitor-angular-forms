import { FormControl } from '@angular/forms';

export function mustMatchValidator(matchingControlName: string) {
  return (control: FormControl) => {
    const formGroup = control.root;
    const matchingControl = formGroup.get(matchingControlName);

    if (control && matchingControl) {
      if (control.invalid || matchingControl.invalid) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        return {
          mustMatch: true,
        };
      }
    }

    return null;
  };
}
