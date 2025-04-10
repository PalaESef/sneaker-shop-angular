import { Injectable } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SneakerService {
  private sneakerList = signal<Sneaker[]>([
    {
      id: 1,
      name: 'Air Jordan 1',
      description: 'Classic high top sneaker.',
      price: 199.99,
      imageUrl: 'assets/jordan1.jpg'
    },
    {
      id: 2,
      name: 'Yeezy Boost 350 Black Red',
      description: 'Comfort meets fashion.',
      price: 249.99,
      imageUrl: 'assets/yeezy.jpg'
    },
    {
      id: 3,
      name: 'Yeezy Boost 350 Yecheil',
      description: 'Everyday performance.',
      price: 149.99,
      imageUrl: 'assets/yeezy2.jpg'
    },
    {
      id: 4,
      name: 'Air Jordan 1 - Off White',
      description: 'Really expensive.',
      price: 9999.99,
      imageUrl: 'assets/off1.jpg'
    },
    {
      id: 5,
      name: 'Yeezy Boost 350 Yecheil',
      description: 'Everyday performance.',
      price: 149.99,
      imageUrl: 'assets/yeezy2.jpg'
    }
  ]);

  getSneakers() {
    return this.sneakerList;
  }

  filterSneakers(searchTerm: string) {
    const originalList = this.getSneakers()();
    return originalList.filter(sneaker =>
      sneaker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
