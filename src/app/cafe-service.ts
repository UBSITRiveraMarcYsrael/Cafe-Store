import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  menu = signal([
    {},
    {},
    {},
  ]);

  snack = signal([
    {},
    {},
    {}
  ])

  mart = signal([
    {},
    {},
    {}
  ])
}
