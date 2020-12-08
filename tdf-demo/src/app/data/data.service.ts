import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Registration } from './Registration';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postRegisrationForm(register: Registration)
  {
    return of(register);
  }
}
