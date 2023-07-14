import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    providers: [],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'page', loadChildren: () => import('../pages/page/page.module').then(m => m.PageModule) },
      { path: 'user', loadChildren: () => import('../pages/user/user.module').then(m => m.UserModule) },
    ],
  }
];
