import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AdminComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
