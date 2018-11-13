import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http'
import { PostsComponent } from './posts/posts.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: NavbarComponent } , { path: 'posts', component: PostsComponent }]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PostsComponent, 
  ],
  imports: [
    BrowserModule ,NgbModule, FormsModule,HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
