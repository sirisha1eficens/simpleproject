import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { RegisterStudentComponent } from './register-student/register-student.component';

const routes: Routes = [
  {
    path:'add',component:AddStudentComponent
  },
  {
    path:'edit/:id',component:EditStudentComponent
  },
  {
    path:'list',component:ListStudentComponent
  },
  {path:'login',component:LoginStudentComponent},
  {path:'register',component:RegisterStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
