import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'vendedores', 
    loadChildren: './vendedores/vendedores.module#VendedoresPageModule' 
  },
  { 
    path: 'cadastro-vendedor', 
    loadChildren: './cadastro-vendedor/cadastro-vendedor.module#CadastroVendedorPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
