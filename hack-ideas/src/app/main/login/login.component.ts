import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {UserDB} from '../../models/user-database.model';
import {userDatabase} from '../../../assets/app-data/userDatabase';
import {UtilService} from '../../services/util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router, private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      employeeId: ['']
    });
  }

  login(): void {
    const employeeIdControlName = 'employeeId';
    const validUser = userDatabase.filter((item) =>
      ((item.employeeId === this.loginForm.controls[employeeIdControlName].value)));
    this.redirectUser(!!validUser.length, validUser);
  }

  redirectUser(validUserFlag: boolean, validUser: UserDB[]): void {
    if (validUserFlag) {
      localStorage.setItem('employeeName', validUser[0].employeeName);
      localStorage.setItem('isLoggedInStatus', 'true');
      this.utilService.loginStatusSubject$.next(true);
      this.router.navigate(['home']);
    } else {
      this.loginForm.reset();
    }
  }


}
