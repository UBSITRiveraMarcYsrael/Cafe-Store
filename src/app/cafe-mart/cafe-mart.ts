import { Component, inject } from '@angular/core';
import { CafeService } from '../cafe-service';

@Component({
  selector: 'app-cafe-mart',
  standalone: true,
  imports: [],
  templateUrl: './cafe-mart.html',
  styleUrl: './cafe-mart.css',
})
export class CafeMart {
  service = inject(CafeService)
}
