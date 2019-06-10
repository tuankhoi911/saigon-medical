import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExaminationComponent } from './add-examination/add-examination.component';



const routes: Routes = [
    {
        path: 'add-examination',
        component: AddExaminationComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ExaminationRoutingModule { }
