import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReferComponent } from './refer/refer.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'referral', component: ReferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
