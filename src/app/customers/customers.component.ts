import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  userForm :FormGroup
  id: number;
  name: string;
  surname: string;
  email: string;
  age: number;
  tableData: any;
  

  constructor(private fb:FormBuilder) { 

    this.tableData = [];

    this.userForm = this.fb.group ({
      id: [],
      name :['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }
  addData() {
    this.tableData.push(this.userForm.value);
  }
  editData() {
    

  }
  deleteData(email:string) {
    for (let i = 0; i < this.tableData.length; ++i) {
      if (this.tableData[i].email === email) {
        this.tableData.splice(i, 1);
      }
    }
  }
}
