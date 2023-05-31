import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { mustMatchValidator } from 'src/app/validators/must-match.validator';
import { EmailExistsValidator } from 'src/app/validators/user/email-exists.validator';

@Component({
  selector: 'app-custom-validators-reactive-forms',
  templateUrl: './custom-validators-reactive-forms.page.html',
  styleUrls: ['./custom-validators-reactive-forms.page.scss'],
})
export class CustomValidatorsReactiveFormsPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailExistsValidator: EmailExistsValidator
  ) {}

  get controls() {
    return this.form.controls as { [key: string]: AbstractControl<any, any> };
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('ON SUBMIT', this.form.value);
  }

  private buildForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email],
        [this.emailExistsValidator.validate()],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: [
        '',
        [Validators.required, mustMatchValidator('password')],
      ],
    });

    /* email: new FormControl('', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.emailExistsValidator.validate()],
        }),
    */

    /* this.form
      .get('email')
      .setAsyncValidators([this.emailExistsValidator.validate()]); */
  }
}
