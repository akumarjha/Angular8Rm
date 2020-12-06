import { Injectable } from '@angular/core';
import { IStudent } from './studentlist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {
  private _url :string ="/assets/data/students.json";
  constructor(private http : HttpClient) { }

  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url);
  }
}
