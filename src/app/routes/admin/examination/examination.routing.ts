import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExaminationComponent } from './add-examination/add-examination.component';
import { ExaminationDetailComponent } from './examination-detail/examination-detail.component';



const routes: Routes = [
    {
        path: 'add-examination/:id',
        component: AddExaminationComponent
    },
    {
        path: 'examination-detail/:id',
        component: ExaminationDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ExaminationRoutingModule { }
