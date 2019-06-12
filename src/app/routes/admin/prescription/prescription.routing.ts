import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { PrescriptionDetailComponent } from './prescription-detail/prescription-detail.component';


const routes: Routes = [
    {
        path: 'add-prescription',
        component: AddPrescriptionComponent
    },
    {
        path: 'prescription-detail/:id',
        component: PrescriptionDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
