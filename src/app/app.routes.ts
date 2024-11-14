import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
