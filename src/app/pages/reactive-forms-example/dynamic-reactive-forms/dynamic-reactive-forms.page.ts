import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FakeFormService } from 'src/app/services/fake/form.service';

export interface Options {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

export interface FormControlObject {
  key: string;
  type: string;
  options: Options;
}

@Component({
  selector: 'app-dynamic-reactive-forms',
  templateUrl: './dynamic-reactive-forms.page.html',
  styleUrls: ['./dynamic-reactive-forms.page.scss'],
})
export class DynamicReactiveFormsPage implements OnInit {
  form: FormGroup;
  formInputs: Array<FormControlObject> = [];

  constructor(
    private fb: FormBuilder,
    private fakeFormService: FakeFormService
  ) {}

  get controls() {
    return this.form.controls as { [key: string]: AbstractControl<any, any> };
  }

  ngOnInit(): void {
    this.form = this.fb.group({});

    this.fakeFormService.getSimpleForm().subscribe((res) => {
      this.formInputs = res;
      this.createControls(res);
    });
  }

  createControls(controls: Array<FormControlObject>): void {
    for (let control of controls) {
      const newFormControl = new FormControl();

      if (control.options.required) {
        newFormControl.setValidators(Validators.required);
      }

      this.form.addControl(control.key, newFormControl);
    }
  }

  submitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('ON SUBMIT', this.form.value);
  }
}
