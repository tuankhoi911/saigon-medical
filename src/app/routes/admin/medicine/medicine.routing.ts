import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';


const routes: Routes = [
    {
        path: 'add-medicine',
        component: AddMedicineComponent
    },
    {
        path: 'update-medicine/:id',
        component: UpdateMedicineComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class MedicineRoutingModule { }
