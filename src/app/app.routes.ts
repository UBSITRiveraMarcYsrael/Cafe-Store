import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CafeMart } from './cafe-mart/cafe-mart';
import { CafeMenu } from './cafe-menu/cafe-menu';
import { Snacks } from './snacks/snacks';


export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'cafe-menu', component: CafeMenu},
    {path: 'cafe-mart', component: CafeMart},
    {path: 'snacks', component: Snacks},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
