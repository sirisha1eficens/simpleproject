import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
public signup!:FormGroup;
  constructor(private router:Router ,private formBuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.signup=this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      mobile:['', Validators.required]
    })
  }
signUp(){
  this.http.post<any>("http://localhost:3000/signupUsers",this.signup.value).
  subscribe(res=>{
    alert("signup successfull");
    this.signup.reset();
    this.router.navigate(['login']);
  },err=>{
    alert("Something wenr wrong")
  })
}
}
