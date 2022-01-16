import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products', component: ProductComponent},
  {path:'card', component: CardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
