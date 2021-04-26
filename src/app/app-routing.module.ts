import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {loadRemoteModule} from "@angular-architects/module-federation";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mouti',
     loadChildren: () =>
   loadRemoteModule({
   remoteName: 'mfe1',
   exposedModule: './Module'
 })
 .then(m => m.AppModule)
  },
  {
    path: 'abeda',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe2',
        exposedModule: './Module'
      })
        .then(m => m.AppModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
