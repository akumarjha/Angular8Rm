import { Component } from '@angular/core';
import { IStudent } from './studentlist/studentlist';
import { StudentlistService } from './studentlist/studentlist.service';

@Component({
  selector: 'test-app',
  templateUrl:'./app.component.html'
})

export class AppComponent
{
  name:string ="Welcome to Angular8!";
  public myId ="testId";
  textSize:number=30;
  fontStyle:string='bold';
  applyBoldStyleClass:boolean =true;
  applyobliqueStyleClass:boolean=true
  public message:string ="";
  public txtName:string ="";
  Heading:string="Student Details"

  public applyStyle()
  {
    var myStyle =
    {
    'font-family':'Impact, Charcoal, sans-serif',
    'font-size':this.textSize,
    'font-style':this.fontStyle
    };
    return myStyle;
  }
  public addStyleClasses(){
    var classes={
      boldStyleClass:this.applyBoldStyleClass,
      obliqueStyleClass:this.applyobliqueStyleClass
    };
    return classes;
  }
  public onClick():void
  {
    console.log('Button has been clicked..');
    this.message ="Button has been clicked..";
  }

  //parent child component interaction app is parent & test is child component 
  public pName:string ="Ashutosh";

  public txtLifeCycleHooks:string ="Ashutosh Jha";

  // public students : IStudent[]= [];
  // constructor(private _studentService : StudentlistService)
  // {}
  // ngOnInit(){
  //   this._studentService.getStudents()
  //   .subscribe(data =>this.students = data);
  // }
}