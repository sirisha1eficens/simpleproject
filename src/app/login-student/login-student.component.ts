import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators}from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
public loginForm!:FormGroup
  constructor(private router:Router ,private formBuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
login(){
  this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
    console.log("logged in ")
    this.router.navigate(['list'])

  const user=res.find((a:any)=>{
    return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password

  });
  if(user){
    alert("login success");
    this.loginForm.reset();
    this.router.navigate(['list'])
  }
  else{
    alert("login failed");
  }
  },err=>{
    alert("something wrong");
  })

}
}
