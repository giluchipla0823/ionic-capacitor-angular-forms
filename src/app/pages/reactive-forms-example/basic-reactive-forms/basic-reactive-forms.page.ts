import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-forms',
  templateUrl: './basic-reactive-forms.page.html',
  styleUrls: ['./basic-reactive-forms.page.scss'],
})
export class BasicReactiveFormsPage implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  get controls() {
    return this.form.controls as { [key: string]: any };
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
