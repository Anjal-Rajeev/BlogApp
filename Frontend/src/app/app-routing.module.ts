import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent, children:[{path:'alerts',component:AlertsComponent},{path:'comment',component:CommentComponent}]},
  {path:'home', component:HomeComponent, children:[{path:'comment',component:CommentComponent}]},
  {path:'signup', component:SignupComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
