import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

 userForm: FormGroup;
 editForm: FormGroup;
 id: number;
 name: string;
 surname: string;
 email: string;
 age: number;
 tableData: any;
 
 
 lastId: number = 0;
 
 editingCustomerId: number;
 
 constructor(private fb: FormBuilder) {
 this.tableData = [];
 
 this.userForm = this.fb.group({
 id: [],
 name: ['', Validators.required],
 surname: ['', Validators.required],
 email: ['', Validators.required],
 age: ['', Validators.required]
 });
 
 this.editForm = this.fb.group({
 id: [],
 name: ['', Validators.required],
 surname: ['', Validators.required],
 email: ['', Validators.required],
 age: ['', Validators.required]
 });
 }
 
 ngOnInit(): void {}
 addData() {
 let customer = this.userForm.value;
 customer.id = ++this.lastId;
 this.tableData.push(customer);
 }
 editData(id: number) {
 let customer = this.tableData.find((data:any) => data.id == id);
 this.editForm.setValue({
 id: customer.id,
 name: customer.name,
 surname: customer.surname,
 email: customer.email,
 age: customer.age
 });
 this.editingCustomerId = customer.id;
 }
 
 updateData() {
 let customerIndex = this.tableData.findIndex((data:any) => data.id == this.editingCustomerId);
 let updatedCustomer = this.editForm.value;
 
 this.tableData.splice(customerIndex, 1);
 this.tableData.push(updatedCustomer);
 
 console.log(this.tableData);
 }
 deleteData(id: number) {
 for (let i = 0; i < this.tableData.length; ++i) {
 if (this.tableData[i].id === id) {
 this.tableData.splice(i, 1);
 }
 }
 }
}