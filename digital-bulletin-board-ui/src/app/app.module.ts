import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ViewPostsComponent} from "./component/viewPosts/viewpost.component";
import {AddPostsComponent} from "./component/addPosts/addpost.component";
import {UpdatePostComponent } from "./component/updatePosts/updatepost.component";

import {RouterOutlet} from "@angular/router";
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";



export const routerConfig: Routes = [
  {
    path: 'viewpost',
    component: ViewPostsComponent,
  },
  {
    path:'addpost',
    component: AddPostsComponent,
  },
  {
    path: 'editpost/:id',
    component: UpdatePostComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewPostsComponent,
    AddPostsComponent,
    UpdatePostComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routerConfig),
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
