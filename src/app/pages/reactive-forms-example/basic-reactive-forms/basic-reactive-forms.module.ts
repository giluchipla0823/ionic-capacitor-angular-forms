import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicReactiveFormsPageRoutingModule } from './basic-reactive-forms-routing.module';

import { BasicReactiveFormsPage } from './basic-reactive-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BasicReactiveFormsPageRoutingModule,
  ],
  declarations: [BasicReactiveFormsPage],
})
export class BasicReactiveFormsPageModule {}
