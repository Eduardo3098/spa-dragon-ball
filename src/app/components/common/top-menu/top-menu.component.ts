import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DxButtonModule, DxMenuModule} from "devextreme-angular";
import {TopMenuInterface} from "../../../interfaces/top-menu.interface";
import {BrowserModule, BrowserTransferStateModule} from "@angular/platform-browser";
@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [CommonModule, DxMenuModule, BrowserModule, BrowserTransferStateModule, DxButtonModule],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  items: TopMenuInterface[] = [];
  ngOnInit(): void {
    this.items = [
      {
        name: 'Personajes | '
      },
      {
        name: 'Favoritos | '
      },
      {
        name: 'Ingresar | '
      }
    ]
  }


}
