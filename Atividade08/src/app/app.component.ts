import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from './componente-01/componente-01.component';
import { Componente02Component } from './componente-02/componente-02.component';  
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente02Component, Componente02Component],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Adicione apenas se necessário
})
export class AppComponent {
  title = 'Atividade08';
}
