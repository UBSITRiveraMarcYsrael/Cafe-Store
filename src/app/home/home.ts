import { Component, inject } from '@angular/core';
import { CafeService } from '../cafe-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  service = inject(CafeService);
}
