import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryManagementModule } from './inventory-management/inventory-management.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
