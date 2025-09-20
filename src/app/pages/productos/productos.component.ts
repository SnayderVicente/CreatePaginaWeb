// src/app/pages/productos/productos.component.ts

import { Component, OnInit } from '@angular/core'; // Asegúrate de importar OnInit
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit { // Implementa OnInit para usarlo

  constructor(private title: Title, private meta: Meta) {}

  // Define las rutas de las imágenes aquí, como propiedades de la clase
  manzanasImg = 'assets/images/manzanas.jpeg';
  platanosImg = 'assets/images/platanos.jpeg';
  uvasImg = 'assets/images/uvas.jpeg';

  ngOnInit(): void {
    this.title.setTitle('Productos | Distribuidora Abril');
    this.meta.addTags([
      { name: 'description', content: 'Explora nuestra selección de frutas frescas de la más alta calidad.' },
      { name: 'keywords', content: 'distribuidora de frutas, productos, frutas, Valle Grande, almacén de frutas' },
      { name: 'og:title', content: 'Productos | Distribuidora Abril' },
      { name: 'og:description', content: 'Explora la variedad y frescura de nuestros productos.' },
      { name: 'og:image', content: '/assets/images/manzanas.jpeg' } // Cambia la URL
    ]);
  }
}