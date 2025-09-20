import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Inicio | Negocio XYZ');
  this.meta.addTags([
    { name: 'description', content: 'Bienvenido a Negocio XYZ, soluciones confiables para tu empresa.' },
    { name: 'og:image', content: 'https://tusitio.com/assets/inicio.jpg' }
  ]);
}

}
