import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { ProductsComponent } from './pages/products/products';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ventas_c';
}


