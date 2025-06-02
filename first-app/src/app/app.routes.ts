import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CounterComponent } from './components/counter/counter.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';

export const routes: Routes = [
    {path: '', component: ListProductsComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'github', component: GithubUsersComponent}
];
