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
  productoSeleccionado: Product | null = null;

  constructor(private productsService: Products) {}

  ngOnInit(): void {
    this.productos = this.productsService.getProducts();
  }

  abrirModal(producto: Product): void {
    this.productoSeleccionado = producto;
  }

  cerrarModal(): void {
    this.productoSeleccionado = null;
  }
}