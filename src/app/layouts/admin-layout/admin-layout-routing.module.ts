import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        data: { title: 'TABLEAU DE BORD' },
        resolve: {
            layout: () => import("../../layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
