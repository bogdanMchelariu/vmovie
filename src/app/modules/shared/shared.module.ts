import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
