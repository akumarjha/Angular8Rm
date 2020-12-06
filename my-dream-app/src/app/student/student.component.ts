import { Component } from '@angular/core';



@Component({
    selector:'my-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})

export class StudentComponent
{
    firstName:string='Ashutosh';
    lastName:string='Jha';
    gender:string='Male';
    age:number=28;

    public ngForHeader:string ="ngFor dirctives demo!";
    public names = ["Ashutosh","Amit","Ankit","Rohit"];

    public ngSwitchHeader:string ="ngSwitch dirctives demo!";
    public fruit ="banana";

    public ngIfHeader:string ="ngIf dirctives demo!";
    public switchBulb =true;
    public toggleSwitch()
    {
        this.switchBulb = !this.switchBulb;
    }

    public pipeExample:string = "Angular pipe demo";
    public dob:string = "12/02/2020";

    public amount:number =100.4567;

}