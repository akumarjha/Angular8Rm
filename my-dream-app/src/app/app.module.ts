import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { SimpleComponent } from './hooks/simple.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailComponent } from './student-detail/student-detail.component';


const appRoutes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'students', component : StudentlistComponent},
  {path : 'students/:id', component : StudentDetailComponent},
  {path : '', redirectTo : '/home', pathMatch :'full'},
  {path : '**', component : NopagetodisplayComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    SimpleComponent,
    StudentlistComponent,
    HomeComponent,
    NopagetodisplayComponent,
    StudentDetailComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, StudentComponent]
})
export class AppModule { }
