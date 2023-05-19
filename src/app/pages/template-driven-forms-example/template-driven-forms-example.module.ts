import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateDrivenFormsExamplePageRoutingModule } from './template-driven-forms-example-routing.module';

import { TemplateDrivenFormsExamplePage } from './template-driven-forms-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateDrivenFormsExamplePageRoutingModule
  ],
  declarations: [TemplateDrivenFormsExamplePage]
})
export class TemplateDrivenFormsExamplePageModule {}
