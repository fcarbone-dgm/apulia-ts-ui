import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './components/selector/selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SelectorComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SelectorComponent,
    TableComponent
  ]
})
export class SharedModule { }
