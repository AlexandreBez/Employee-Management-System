import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RoutesModule } from '../routes/routing.modules';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RoutesModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
