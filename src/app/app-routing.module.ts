
import { ConverterComponent } from './components/converter/converter.component';
import {ContactPageComponent } from './components/contact-page/contact-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'; 
import { UserRegisterComponent } from './components/user-register/user-register.component';

//register the routes (paths) for your pages
const routes: Routes = [
{ path: '', component: MainPageComponent },
{ path: 'contact', component: ContactPageComponent },
{ path: 'converter', component: ConverterComponent },
{ path: 'user/register', component: UserRegisterComponent}, 
{ path: 'navbar', component: NavBarComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
