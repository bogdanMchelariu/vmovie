import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';


@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule, VirtualScrollerModule],
  exports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule, VirtualScrollerModule]
})
export class SharedModule {}
