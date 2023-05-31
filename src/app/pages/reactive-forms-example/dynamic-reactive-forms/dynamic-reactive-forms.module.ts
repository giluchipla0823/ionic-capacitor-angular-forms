import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicReactiveFormsPageRoutingModule } from './dynamic-reactive-forms-routing.module';

import { DynamicReactiveFormsPage } from './dynamic-reactive-forms.page';
import { FormErrorMessagesModule } from 'src/app/components/form-error-messages/form-error-messages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DynamicReactiveFormsPageRoutingModule,
    FormErrorMessagesModule,
  ],
  declarations: [DynamicReactiveFormsPage],
})
export class DynamicReactiveFormsPageModule {}
