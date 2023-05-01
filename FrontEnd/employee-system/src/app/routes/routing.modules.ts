import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('../add-employee/add-employee.module').then((m) => m.AddEmployeeModule),
  },
  {
    path: '',
    loadChildren: () => import('../not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: '**', redirectTo: '/NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class RoutesModule {}