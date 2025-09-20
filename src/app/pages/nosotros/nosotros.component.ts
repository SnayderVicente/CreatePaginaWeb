import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {

constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Nosotros | Negocio XYZ');
    this.meta.addTags([
      { name: 'description', content: 'Conoce al equipo detrás de Negocio XYZ y nuestra misión empresarial.' },
      { name: 'keywords', content: 'nosotros, equipo, misión, visión, empresa' },
      { name: 'og:title', content: 'Nosotros | Negocio XYZ' },
      { name: 'og:description', content: 'Conoce al equipo detrás de Negocio XYZ.' },
      { name: 'og:image', content: 'https://negocio-web.vercel.app/assets/nosotros.jpg' }
    ]);
  }



}
