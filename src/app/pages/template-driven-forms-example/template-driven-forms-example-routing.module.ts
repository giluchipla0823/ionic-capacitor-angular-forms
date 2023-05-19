import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenFormsExamplePage } from './template-driven-forms-example.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormsExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateDrivenFormsExamplePageRoutingModule {}
