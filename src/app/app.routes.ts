import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { ProductsComponent  } from './pages/products/products';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },  // Página principal
  { path: 'nosotros', component: About },
  { path: 'productos', component: ProductsComponent },
  { path: 'contacto', component: Contact },
  { path: '**', redirectTo: '' },  // Redirección para rutas no existentes
];
