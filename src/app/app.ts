import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Products } from './services/products';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ventas_c';
}


