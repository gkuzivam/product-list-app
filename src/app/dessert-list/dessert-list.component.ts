import { Component, inject } from '@angular/core';
import { DesertItem } from '../../desertitem';
import { DesertService } from '../desert.service';
import { DessertItemComponent } from "../dessert-item/dessert-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dessert-list',
  imports: [DessertItemComponent, CommonModule],
  templateUrl: './dessert-list.component.html',
  styleUrl: './dessert-list.component.css'
})

export class DessertListComponent {
  dessertList: DesertItem[] = [];
  desertService: DesertService = inject(DesertService);

  constructor() {
    this.dessertList = this.desertService.getDesertList();
  }

}
