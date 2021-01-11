import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import {ArticlesComponent} from 'src/app/components/articles/articles.component';
import {AboutUsComponent} from './components/about-us/about-us.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'about-us', component: AboutUsComponent},
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
