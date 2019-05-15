import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlysanphamComponent } from './quanlysanpham.component';

@NgModule({
  declarations: [QuanlysanphamComponent],
  exports:[QuanlysanphamComponent],
  imports: [
    CommonModule
  ]
})
export class QuanlysanphamModule { }
