import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancedReactiveFormsPageRoutingModule } from './advanced-reactive-forms-routing.module';

import { AdvancedReactiveFormsPage } from './advanced-reactive-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdvancedReactiveFormsPageRoutingModule,
  ],
  declarations: [AdvancedReactiveFormsPage],
})
export class AdvancedReactiveFormsPageModule {}
