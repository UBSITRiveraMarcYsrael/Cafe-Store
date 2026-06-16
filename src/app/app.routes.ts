import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CafeMart } from './cafe-mart/cafe-mart';
import { CafeMenu } from './cafe-menu/cafe-menu';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'cafe-menu', component: CafeMenu},
    {path: 'cafe-mart', component: CafeMart},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
