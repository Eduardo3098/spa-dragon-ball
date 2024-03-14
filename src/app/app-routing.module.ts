import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./components/characters/characters.module').then(m => m.CharactersModule)
  },
  // {
  //   children: [
  //     { path: 'characters', loadChildren: () => import('./components/characters/characters.module').then(m => m.CharactersModule) }
  //   ]
  // }
  // {
  //   // path: 'dragon-ball', component: AppComponent,
  //   // children: [
  //   //   { path: 'characters', loadChildren: () => import('./components/characters/characters.module').then(m => m.CharactersModule) }
  //   // ]
  // },
  // { path: '**', redirectTo: 'dragon-ball' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
