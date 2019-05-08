import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller.component';
import { ControllerRoutingModule } from './controller.routing';

@NgModule({
  declarations: [ControllerComponent],
  imports: [
    CommonModule,
    ControllerRoutingModule
  ]
})
export class ControllerModule { }
