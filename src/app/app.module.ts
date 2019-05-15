import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuanlysanphamModule } from './quanlysanpham/quanlysanpham.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuanlysanphamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
