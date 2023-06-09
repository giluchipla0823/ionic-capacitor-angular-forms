import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'reactive-forms-example',
    loadChildren: () =>
      import(
        './pages/reactive-forms-example/reactive-forms-example.module'
      ).then((m) => m.ReactiveFormsExamplePageModule),
  },
  {
    path: 'template-driven-forms-example',
    loadChildren: () =>
      import(
        './pages/template-driven-forms-example/template-driven-forms-example.module'
      ).then((m) => m.TemplateDrivenFormsExamplePageModule),
  },  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
