import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormsExamplePageRoutingModule } from './reactive-forms-example-routing.module';

import { ReactiveFormsExamplePage } from './reactive-forms-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsExamplePageRoutingModule
  ],
  declarations: [ReactiveFormsExamplePage]
})
export class ReactiveFormsExamplePageModule {}
