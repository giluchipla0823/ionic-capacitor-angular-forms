import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsExamplePage } from './reactive-forms-example.page';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormsExamplePage,
  },
  {
    path: 'basic-reactive-forms',
    loadChildren: () =>
      import('./basic-reactive-forms/basic-reactive-forms.module').then(
        (m) => m.BasicReactiveFormsPageModule
      ),
  },
  {
    path: 'custom-validators-reactive-forms',
    loadChildren: () =>
      import(
        './custom-validators-reactive-forms/custom-validators-reactive-forms.module'
      ).then((m) => m.CustomValidatorsReactiveFormsPageModule),
  },
  {
    path: 'advanced-reactive-forms',
    loadChildren: () =>
      import('./advanced-reactive-forms/advanced-reactive-forms.module').then(
        (m) => m.AdvancedReactiveFormsPageModule
      ),
  },
  {
    path: 'dynamic-reactive-forms',
    loadChildren: () =>
      import('./dynamic-reactive-forms/dynamic-reactive-forms.module').then(
        (m) => m.DynamicReactiveFormsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormsExamplePageRoutingModule {}
