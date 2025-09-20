import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Productos | Negocio XYZ');
    this.meta.addTags([
      { name: 'description', content: 'Explora nuestros productos innovadores y soluciones personalizadas.' },
      { name: 'keywords', content: 'productos, catálogo, soluciones, tecnología, ventas' },
      { name: 'og:title', content: 'Productos | Negocio XYZ' },
      { name: 'og:description', content: 'Explora nuestros productos innovadores.' },
      { name: 'og:image', content: 'https://negocio-web.vercel.app/assets/productos.jpg' }
    ]);
  }

}
