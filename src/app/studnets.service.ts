import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudnetsService {
  url='http://localhost:3000/students';
  constructor(private http:HttpClient) {
  }
    
    getAllStudents(){
      return this.http.get(this.url);
    }
  saveStudentData(data:any){
    return this.http.post(this.url,data)
    console.log(data);
  }
  deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  getStudentById(id:any){
    return this.http.get(`${this.url}/${id}`);

  }
  updateStudentData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
}
