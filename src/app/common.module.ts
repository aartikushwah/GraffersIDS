import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialShared } from './shared/material.shared';

@NgModule({
  imports: [
    MaterialShared,
    FlexLayoutModule,
    CommonModule
  ],
  exports:[
    MaterialShared,
    FlexLayoutModule,
    CommonModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CommonAllModule { }
