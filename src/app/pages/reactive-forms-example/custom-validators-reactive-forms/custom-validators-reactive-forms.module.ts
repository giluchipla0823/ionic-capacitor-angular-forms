import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomValidatorsReactiveFormsPageRoutingModule } from './custom-validators-reactive-forms-routing.module';

import { CustomValidatorsReactiveFormsPage } from './custom-validators-reactive-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CustomValidatorsReactiveFormsPageRoutingModule,
  ],
  declarations: [CustomValidatorsReactiveFormsPage],
})
export class CustomValidatorsReactiveFormsPageModule {}
