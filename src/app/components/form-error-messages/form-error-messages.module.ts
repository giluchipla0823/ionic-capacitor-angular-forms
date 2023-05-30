import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorMessagesComponent } from './form-error-messages.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormErrorMessagesComponent],
  exports: [FormErrorMessagesComponent],
})
export class FormErrorMessagesModule {}
