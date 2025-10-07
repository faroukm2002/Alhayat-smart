import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {Globals} from './servicesApi/globals';
import {AccessGuard} from './servicesApi/AccessGuard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':language', component: HomeComponent},
  {path: '**', component: HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Globals, AccessGuard]
})
export class AppRoutingModule {
}
