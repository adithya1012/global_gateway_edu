import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostsComponent } from './component/viewPosts/viewpost.component';
import { AddPostsComponent } from './component/addPosts/addpost.component';
import { UpdatePostComponent } from './component/updatePosts/updatepost.component';

const routes: Routes = [
  { path: 'viewpost', component: ViewPostsComponent },
  { path: 'addpost', component: AddPostsComponent },
  { path: 'editpost/:id', component: UpdatePostComponent },
  // { path: '', redirectTo: '/app', pathMatch: 'full' },
  // { path: '**', redirectTo: '/app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
