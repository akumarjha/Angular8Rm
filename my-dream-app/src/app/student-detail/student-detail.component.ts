import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public studentId ? : string ="";
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    // let id1 = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id1 = params.get('id');
      this.studentId = id1 ? id1 : "";
    })
  }
  goPrevious() {
    let lastval = this.getLastChar(this.studentId ? this.studentId : "");
    let previousId = lastval - 1; 
    let restval = this.getrestChar(this.studentId ? this.studentId : "");
    let id = restval+previousId;
    this.router.navigate(['/students',id]);
  }
  goNext() {
    let lastval = this.getLastChar(this.studentId ? this.studentId : "");
    let nextId = lastval + 1; 
    let restval = this.getrestChar(this.studentId ? this.studentId : "");
    let id = restval+nextId;
    console.log("goNext::"+id +"lastval = "+lastval +"restval = "+restval);
    this.router.navigate(['/students',id]);
  }
  getLastChar(stdid:string) :number
  {
    let lastChar = stdid.substr(stdid.length - 1);
    return parseInt(lastChar);
  }
  getrestChar(stdid:string):string
  {
    let getchar = stdid.slice(0,stdid.length-1);
    return getchar;
  }
}
