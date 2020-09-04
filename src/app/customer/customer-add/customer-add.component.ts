import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  createCustomer = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', Validators.required]
  })

  onCreateUser() {
    console.log("Customer submit...",this.createCustomer.value);
  }

}
