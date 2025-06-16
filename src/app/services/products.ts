import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number | null;
  description: string | null;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  private products: Product[] = [
    {
      id: 1,
      name: 'Chef profesional',
      price: 650,
      description: 'Sazón y Belleza',
      image: '/img/prod4.jpg',
    },
    {
      id: 2,
      name: 'Skate',
      price: 920,
      description: 'Diversión alocada',
      image: '/img/prod1.jpg',
    },
    {
      id: 3,
      name: '´Patinando sobre hielo',
      price: 390,
      description: 'Pochacco sobre el hielo',
      image: '/img/produ2.jpg',
    },
    {
      id: 4,
      name: 'BasquetBall',
      price: 100,
      description: 'Diversión y Juego',
      image: '/img/prod3.jpg',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
