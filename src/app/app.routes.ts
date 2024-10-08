import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "",
        component: AdminLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
            }
        ]
    },
    {
        path: "*",
        redirectTo: "/404-error"
    },
    {
        path: "**",
        redirectTo: "/404-error"
    }
];
