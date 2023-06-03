import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {JobContactComponent} from'./job-contact/job-contact.component';

const routes: Routes = [

  { path: 'jobs', component: JobContactComponent },
  {path:'',component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
