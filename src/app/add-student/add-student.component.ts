import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators} from'@angular/forms';
import { StudnetsService } from '../studnets.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private student:StudnetsService) { }
 addStudent=new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required)
});
message:boolean=false;
  ngOnInit(): void {
  }
  saveData(){
      
    //console.log(this.addStudent.value);
    this.student.saveStudentData(this.addStudent.value).subscribe((result)=>{
      //console.log(result);
      this.message=true;
      this.addStudent.reset({});
    });
  }
  removeMessage()
  {
    this.message=false;
  }
}
