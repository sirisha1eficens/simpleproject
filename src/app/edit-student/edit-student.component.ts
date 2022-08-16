import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudnetsService } from '../studnets.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private student:StudnetsService,private router:ActivatedRoute) { }
  editStudent=new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  message:boolean=false;
    ngOnInit(): void {
      //console.log(this.router.snapshot.params['id']);
      this.student.getStudentById(this.router.snapshot.params['id']).subscribe((result:any)=>
      {
        //console.log(result);
        this.editStudent=new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email'])
        });
        

      })
    }
    updateData(){
        
      //console.log(this.editStudent.value);
      this.student.updateStudentData(this.router.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
        console.log(result);
        this.message=true;
        this.editStudent.reset({});
      });
    }
    removeMessage()
    {
      this.message=false;
    }
  }
  