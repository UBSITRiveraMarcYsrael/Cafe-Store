import { Component, inject } from '@angular/core';
import { CafeService } from '../cafe-service';

@Component({
  selector: 'app-cafe-menu',
  standalone: true,
  imports: [],
  templateUrl: './cafe-menu.html',
  styleUrl: './cafe-menu.css',
})
export class CafeMenu {
  service = inject(CafeService);
}
