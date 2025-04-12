import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/sneaker-list/sneaker-list.component').then((m) => m.SneakerListComponent),
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
