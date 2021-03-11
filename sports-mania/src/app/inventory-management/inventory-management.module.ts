import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { AddUpdateInventoryComponent } from './add-update-inventory/add-update-inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [ListInventoryComponent, AddUpdateInventoryComponent, HeaderComponent, ButtonComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  
})
export class InventoryManagementModule { }
