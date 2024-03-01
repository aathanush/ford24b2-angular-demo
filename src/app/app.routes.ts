import { Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'home', component: HomeComponent },
    {path:'products',component:ProductsComponent},
    {path:'details/:id',component:DetailsComponent},
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent }
];
