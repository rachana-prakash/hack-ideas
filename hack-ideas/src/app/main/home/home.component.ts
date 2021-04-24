import {Component, OnDestroy, OnInit} from '@angular/core';
import {challenges} from './../../../assets/app-data/challenges';
import {Challenge} from '../../models/challenges.model';
import {Router} from '@angular/router';
import {UtilService} from '../../services/util.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  codeChallenges: Challenge[] = challenges;
  updateSubscription: Subscription;

  constructor(private router: Router, private utilService: UtilService) {
    if (this.utilService.getLocalStorageItem('challenge') && this.utilService.getLocalStorageItem('challenge').length === 0) {
      this.utilService.setLocalStorageItem('challenge', this.codeChallenges);
    } else {
      this.codeChallenges = this.utilService.getLocalStorageItem('challenge');
    }
  }

  ngOnInit(): void {
    this.updateSubscription = this.utilService.updateChallengesSubject$.subscribe((update) => {
      if (update) {
        this.codeChallenges = this.utilService.getLocalStorageItem('challenge');
      }
    });
  }

  addChallenge(): void {
    this.router.navigate([{outlets: {popup: ['add-challenge']}}]);
  }

  vote(type: string, challenge: Challenge): void {
    switch (type) {
      case 'upvote':
        challenge = {...challenge, count: ++challenge.count};
        break;
      case 'downvote':
        challenge = {...challenge, count: --challenge.count};
        break;
    }
    this.alterChallenges(challenge);
  }

  alterChallenges(challenge: Challenge): void {
    this.codeChallenges.map((codeChallengeItem) => {
      if (codeChallengeItem.id === challenge.id) {
        codeChallengeItem = {...challenge};
      }
      return codeChallengeItem;
    });
    this.utilService.setLocalStorageItem('challenge', this.codeChallenges);
  }

  sortCountChallenges(order): void {
    this.codeChallenges.sort((a, b) => {
      if (order === 'desc') {
        return this.sortCountDesc(a, b);
      } else {
        return this.sortCountDesc(b, a);
      }
    });
  }

  sortDateChallenges(order): void {
    this.codeChallenges.sort((a, b) => {
      if (order === 'desc') {
        return this.sortDateDesc(a, b);
      } else {
        return this.sortDateDesc(b, a);
      }
    });
  }

  sortCountDesc(a, b): number {
    return b.count - a.count;
  }

  sortDateDesc(a, b): number {
    return +new Date(b.date) - +new Date(a.date);
  }

  ngOnDestroy(): void {
    this.updateSubscription.unsubscribe();
  }
}
