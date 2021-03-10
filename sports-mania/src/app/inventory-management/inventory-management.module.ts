import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { AddUpdateInventoryComponent } from './add-update-inventory/add-update-inventory.component';



@NgModule({
  declarations: [ListInventoryComponent, AddUpdateInventoryComponent],
  imports: [
    CommonModule
  ]
})
export class InventoryManagementModule { }
