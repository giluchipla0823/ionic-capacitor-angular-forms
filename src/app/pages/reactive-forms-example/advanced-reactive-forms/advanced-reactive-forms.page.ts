import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { duplicateValuesValidator } from 'src/app/validators/duplicated-values.validator';

@Component({
  selector: 'app-advanced-reactive-forms',
  templateUrl: './advanced-reactive-forms.page.html',
  styleUrls: ['./advanced-reactive-forms.page.scss'],
})
export class AdvancedReactiveFormsPage implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  get controls() {
    return this.form.controls as { [key: string]: any };
  }

  get tickets() {
    return this.controls.tickets as FormArray;
  }

  get ticketFormGroups() {
    return this.tickets.controls as Array<FormGroup>;
  }

  ngOnInit(): void {}

  onChangeTickets(e: any): void {
    const numberOfTickets = e.target.value || 0;

    const countTickets = this.tickets.length;

    if (countTickets < numberOfTickets) {
      for (let i = countTickets; i < numberOfTickets; i++) {
        this.tickets.push(this.buildTicketForm());
      }
    } else {
      for (let i = countTickets; i >= numberOfTickets; i--) {
        this.tickets.removeAt(i);
      }
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('ON SUBMIT', this.form.value);
  }

  onReset(): void {
    this.form.reset();
    this.tickets.clear();
  }

  private buildForm(): void {
    this.form = this.fb.group(
      {
        numberOfTickets: ['', Validators.required],
        tickets: new FormArray([]),
      },
      {
        validators: [duplicateValuesValidator('tickets', 'email')],
      }
    );
  }

  private buildTicketForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
