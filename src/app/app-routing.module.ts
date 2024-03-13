import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ModuleComponent } from './components/module/module.component';
import { ModuleVideosComponent } from './components/module-videos/module-videos.component';
import { LoginComponent } from './components/user-handling/login/login.component';
import { RegisterComponent } from './components/user-handling/register/register.component';

const routingCompo= [
    HomeComponent,
    SubjectComponent,
    ChapterComponent,
    ModuleComponent,
    LoginComponent,
    RegisterComponent,
    ModuleVideosComponent,
];

const routes: Routes = [  
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sub/:id', component: SubjectComponent },
    { path: 'chap/:id', component: ChapterComponent },
    { path: 'mod/:id', component: ModuleComponent },
    { path: 'modv/:id', component: ModuleVideosComponent },

    { path: '**', redirectTo: 'home' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
export const routingComponents = routingCompo;