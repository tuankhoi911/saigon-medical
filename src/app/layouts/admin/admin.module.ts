import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeModule } from 'src/app/routes/home/home.module';

@NgModule({
  declarations: [AdminComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeModule
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
