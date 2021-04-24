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

  constructor(private router: Router, private utilService: UtilService) {
  }

  ngOnInit(): void {
    this.isLoggedInStatus = JSON.parse((localStorage.getItem('isLoggedInStatus')));
    this.loginStatusSubscription = this.utilService.loginStatusSubject$.subscribe((actionEmitted) => {
      if (actionEmitted) {
        this.isLoggedInStatus = JSON.parse((localStorage.getItem('isLoggedInStatus')));
      }
    });
  }

  logOut(): void {
    localStorage.removeItem('employeeName');
    localStorage.removeItem('isLoggedInStatus');
    this.utilService.loginStatusSubject$.next(true);
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    this.loginStatusSubscription.unsubscribe();
  }
}
