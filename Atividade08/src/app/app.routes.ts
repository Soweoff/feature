import { Routes } from '@angular/router';

import { Componente01Component } from './componente-01/componente-01.component';
import { Componente02Component } from './componente-02/componente-02.component';


export const routes: Routes = [
  { path: 'Component', component: Componente01Component },
  { path: '**', component: Componente02Component},
];
