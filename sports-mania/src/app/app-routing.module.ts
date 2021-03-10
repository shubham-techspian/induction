import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginManagementModule } from './login-management/login-management.module';
import { ListInventoryComponent } from './inventory-management/list-inventory/list-inventory.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "login", component: LoginManagementModule },
  { path: "list-inventory", component: ListInventoryComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  LoginManagementModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
