import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CafeMenu } from './cafe-menu/cafe-menu';
import { Snacks } from './snacks/snacks';
import { CafeMart } from './cafe-mart/cafe-mart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, CafeMenu, Snacks, CafeMart ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cafe-Store');
}
