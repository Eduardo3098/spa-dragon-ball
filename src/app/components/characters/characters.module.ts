import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListComponent } from './list/list.component';
import {DxPopoverModule, DxPopupModule} from "devextreme-angular";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    NgOptimizedImage,
    DxPopoverModule,
    DxPopupModule,
  ]
})
export class CharactersModule { }
