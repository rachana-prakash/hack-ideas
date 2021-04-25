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
    if (this.utilService.getLocalStorageItem('challenge') && this.utilService.getLocalStorageItem('challenge').length !== 0) {
      this.codeChallenges = this.utilService.getLocalStorageItem('challenge');
    } else {
      this.utilService.setLocalStorageItem('challenge', this.codeChallenges);
    }
    this.checkVoteStatus();
  }

  ngOnInit(): void {
    this.updateSubscription = this.utilService.updateChallengesSubject$.subscribe((update) => {
      if (update) {
        this.codeChallenges = this.utilService.getLocalStorageItem('challenge');
        this.checkVoteStatus();
      }
    });
  }

  checkVoteStatus(): void {
    const employeeId = this.utilService.getLocalStorageItem('employeeId');
    const voteStatus = this.utilService.getLocalStorageItem(employeeId);
    if (!!this.codeChallenges.length) {
      this.codeChallenges = this.codeChallenges.map((challenge) => {
        challenge = {...challenge, upvoted: false, downvoted: false};
        if (voteStatus && voteStatus.challenges && voteStatus.challenges.length) {
          voteStatus.challenges.filter((item) => {
            if (challenge.id === item.challengeId) {
              challenge = {...challenge, upvoted: item.upvote, downvoted: item.downvote};
            }
          });
        }
        return challenge;
      });
    }
  }

  addChallenge(): void {
    this.router.navigate([{outlets: {popup: ['add-challenge']}}]);
  }

  vote(type: string, challenge: Challenge): void {
    switch (type) {
      case 'upvote':
        challenge = {...challenge, count: ++challenge.count};
        this.updateVoteStatus(challenge.id, true, false);
        break;
      case 'downvote':
        challenge = {...challenge, count: --challenge.count};
        this.updateVoteStatus(challenge.id, false, true);
        break;
    }
    this.alterChallenges(challenge);
  }

  updateVoteStatus(challengeId, upvote, downvote): void {
    const employeeId = this.utilService.getLocalStorageItem('employeeId');
    let challengesArray = this.utilService.getLocalStorageItem(employeeId) && this.utilService.getLocalStorageItem(employeeId).challenges || [];
    challengesArray = [...challengesArray,
      {challengeId, upvote, downvote}
    ];
    this.utilService.setLocalStorageItem(employeeId, {
      employeeId,
      challenges: challengesArray
    });
  }

  alterChallenges(challenge: Challenge): void {
    this.codeChallenges = this.codeChallenges.map((codeChallengeItem) => {
      if (codeChallengeItem.id === challenge.id) {
        codeChallengeItem = {...challenge};
      }
      return codeChallengeItem;
    });
    this.utilService.setLocalStorageItem('challenge', this.codeChallenges);
    this.checkVoteStatus();
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
