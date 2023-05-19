import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicReactiveFormsPage } from './basic-reactive-forms.page';

const routes: Routes = [
  {
    path: '',
    component: BasicReactiveFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicReactiveFormsPageRoutingModule {}
