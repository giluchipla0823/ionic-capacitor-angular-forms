import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms-example',
  templateUrl: './template-driven-forms-example.page.html',
  styleUrls: ['./template-driven-forms-example.page.scss'],
})
export class TemplateDrivenFormsExamplePage implements OnInit {
  email: string = '';
  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    if (f.invalid) {
      return;
    }

    console.log('VALID FORM', f.value);
    console.log('EMAIL VALUE', { email: this.email });
  }
}
