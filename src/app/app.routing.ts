import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from "./main-view/main-view.component";

const routes: Routes = [
  { path: '', component: MainViewComponent }
];

export const AppRouting = RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
});
