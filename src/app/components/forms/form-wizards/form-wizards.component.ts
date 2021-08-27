import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';

@Component({
  selector: 'app-form-wizards',
  templateUrl: './form-wizards.component.html',
  styleUrls: ['./form-wizards.component.scss']
})
export class FormWizardsComponent implements OnInit {

  //Archwizard Content
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  maxDate: Date;

  //verticalform wizard
  detailForm: FormGroup;
  contactForm: FormGroup;
  paymentForm: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

    //Archwizard Content
    this.firstFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cnfPassword: ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'cnfPassword')
      });
    this.thirdFormGroup = this.fb.group({
      birthdate: ['', Validators.required],
      age: [''],
      hasPassport: ['', Validators.required],
    })
    this.fourthFormGroup = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    })

  }
  public finish() {
    this.toaster.success('Successfully Done!')
  }


}
