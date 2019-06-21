import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeModule } from 'src/app/routes/home/home.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LogOutModule } from 'src/app/modals/log-out/log-out.module';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  declarations: [AdminComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeModule,
    NgbModalModule,
    LogOutModule,
    TranslateModule,
    NavbarModule
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
