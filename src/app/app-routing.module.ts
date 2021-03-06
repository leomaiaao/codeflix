import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full'},
  {
    path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'private', loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule),
  },
  { path: '**', redirectTo: 'public', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
