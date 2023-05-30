import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedReactiveFormsPageRoutingModule } from './advanced-reactive-forms-routing.module';

import { AdvancedReactiveFormsPage } from './advanced-reactive-forms.page';
import { CardTicketComponent } from './components/card-ticket/card-ticket.component';
import { FormErrorMessagesModule } from 'src/app/components/form-error-messages/form-error-messages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdvancedReactiveFormsPageRoutingModule,
    FormErrorMessagesModule,
  ],
  declarations: [AdvancedReactiveFormsPage, CardTicketComponent],
})
export class AdvancedReactiveFormsPageModule {}
