import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Registration } from '../data/Registration';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  registration : Registration = {
    name:null,
    notifications:null,
    alerts:null,
    gender:null,
    subscriptionType: null,
    notes:null,
    password:null,
    date: null
  };

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm)
  {
    console.log('form submitted successfully..');
    this.dataService.postRegisrationForm(this.registration)
    .subscribe(
      result => console.log('success',result),
      error =>  console.log('error',error)   
    )
  }

}
