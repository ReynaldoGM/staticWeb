import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './body/body.component';
import {JobContactComponent} from'./job-contact/job-contact.component';
import {ResponseMessageComponent} from './response-message/response-message.component'

const routes: Routes = [

  { path: 'jobs', component: JobContactComponent },
  {path:'response', component:ResponseMessageComponent},
  {path:'',component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
