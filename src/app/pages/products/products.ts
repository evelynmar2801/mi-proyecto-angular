import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  productos: Product[] = [];

  constructor(private productsService: Products) {}

  ngOnInit(): void {
    this.productos = this.productsService.getProducts();
  }
}