import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RoutesModule } from './routes/routing.modules';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
