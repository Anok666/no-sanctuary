import { Routes } from '@angular/router';
import {NewsComponent} from '../components/news/news.component';
import {ConsentComponent} from "../components/consent/consent.component";

export const routes: Routes = [
  { path: '', component: ConsentComponent },
  { path: 'news', component: NewsComponent },
];
