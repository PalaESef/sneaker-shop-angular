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
      description: 'Iconic high-top sneaker with timeless style.',
      price: 180.00,
      imageUrl: 'assets/jordan1.jpg'
    },
    {
      id: 2,
      name: 'Yeezy Boost 350 Black Red',
      description: 'Sleek Primeknit design with signature comfort.',
      price: 220.00,
      imageUrl: 'assets/yeezy.jpg'
    },
    {
      id: 3,
      name: 'Yeezy Boost 350 Yecheil',
      description: 'Colorful and comfy with all-day performance.',
      price: 220.00,
      imageUrl: 'assets/yeezy2.jpg'
    },
    {
      id: 4,
      name: 'Jordan 1 Low - Travis Scott',
      description: 'Unique low-top design with reversed Swoosh.',
      price: 150.00,
      imageUrl: 'assets/off1.jpg'
    },
    {
      id: 5,
      name: 'Jordan 1 High - Travis Scott',
      description: 'Collab high-top with earthy tones and hidden stash pocket.',
      price: 175.00,
      imageUrl: 'assets/travis.jpg'
    },
    {
      id: 6,
      name: 'Nike Ambush - Pink',
      description: 'Bold design with extended Swoosh and striking color.',
      price: 180.00,
      imageUrl: 'assets/ambush.jpg'
    },
    {
      id: 7,
      name: 'Jordan 5 - UNC',
      description: 'Tribute to UNC with premium materials and classic look.',
      price: 225.00,
      imageUrl: 'assets/jordan5.jpg'
    },
    {
      id: 8,
      name: 'Puma Melo',
      description: 'LaMelo Ball’s flashy and high-performance signature sneaker.',
      price: 120.00,
      imageUrl: 'assets/lamelo.jpg'
    },
    {
      id: 9,
      name: 'Air Force 1 - Supreme',
      description: 'Clean AF1 design with subtle Supreme branding.',
      price: 118.00,
      imageUrl: 'assets/af1.jpg'
    },
    {
      id: 10,
      name: 'Jordan 4 - UNC',
      description: 'University Blue AJ4 with suede upper and classic appeal.',
      price: 225.00,
      imageUrl: 'assets/jordan4.jpg'
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
