import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../pages/home/home.module';
import { routes } from './routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesModule {}
