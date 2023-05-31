import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicReactiveFormsPage } from './dynamic-reactive-forms.page';

const routes: Routes = [
  {
    path: '',
    component: DynamicReactiveFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicReactiveFormsPageRoutingModule {}
