import { Component, OnInit } from '@angular/core';
import { StudentlistService } from './studentlist.service';
import {IStudent} from './studentlist';
import {Router} from '@angular/router';



@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers: [StudentlistService] //registered service for angular dependency injection 
})
export class StudentlistComponent implements OnInit {

  public students : IStudent[]= [];
  constructor(private _studentService : StudentlistService, private router:Router)
  {}
  ngOnInit(){
    this._studentService.getStudents()
    .subscribe(data =>this.students = data);
  }
  onSelect(student:IStudent)
  {
    this.router.navigate(['/students',student.id]);
  }

}
