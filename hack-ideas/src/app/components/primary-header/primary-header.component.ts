import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilService} from '../../services/util.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit, OnDestroy {
  isLoggedInStatus: boolean;
  loginStatusSubscription: Subscription;
  employeeName = '';

  constructor(private router: Router, private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.isLoggedInStatus = JSON.parse((localStorage.getItem('isLoggedInStatus')));
    const name = localStorage.getItem('employeeName');
    this.employeeName = name && name.charAt(0).toUpperCase() + name.slice(1);
    this.loginStatusSubscription = this.utilService.loginStatusSubject$.subscribe((actionEmitted) => {
      if (actionEmitted) {
        const eName = localStorage.getItem('employeeName');
        this.employeeName = eName && eName.charAt(0).toUpperCase() + eName.slice(1);
        this.isLoggedInStatus = JSON.parse((localStorage.getItem('isLoggedInStatus')));
      }
    });
  }

  logOut(): void {
    localStorage.removeItem('employeeName');
    localStorage.removeItem('employeeId');
    localStorage.removeItem('isLoggedInStatus');
    this.isLoggedInStatus = false;
    this.utilService.loginStatusSubject$.next(true);
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    this.loginStatusSubscription.unsubscribe();
  }
}
