import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiPlaygroundComponent } from './components/api-playground/api-playground.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-playground', component: ApiPlaygroundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
