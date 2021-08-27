import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';

import { Error500Component } from './error500/error500.component';
import { CustomRoutingModule } from './custom-routing.module';
import { Error404Component } from './error404/error404.component';
import { CustomPageRoutingModule } from './custom-page-routing.module';
import { Custom500RoutingModule } from './custom500-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgetComponent, ResetComponent, LockscreenComponent, UnderconstructionComponent,Error500Component, Error404Component],
  imports: [
    CommonModule,
    CustomRoutingModule,
    CustomPageRoutingModule,
    Custom500RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CustomModule { }
