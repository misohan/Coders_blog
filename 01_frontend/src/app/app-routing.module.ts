import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from 'src/app/components/articles/articles.component';
import {HomeComponent} from 'src/app/components/home/home.component';

const routes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
