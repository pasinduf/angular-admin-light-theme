import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    //Archwizard Content
    this.firstFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      address2: [''],
      contact: ['', Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      zip: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      cardholderName : ['', Validators.required],
      cardNumber : ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvv: ['', Validators.required],
    });

  }

}
