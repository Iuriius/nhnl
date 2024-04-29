import { Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent },
];
