import { Component, inject } from '@angular/core';
import { CafeService } from '../cafe-service';

@Component({
  selector: 'app-snacks',
  standalone: true,
  imports: [],
  templateUrl: './snacks.html',
  styleUrl: './snacks.css',
})
export class Snacks {
  service = inject(CafeService);
}
