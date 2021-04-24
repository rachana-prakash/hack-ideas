import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  updateChallengesSubject$ = new Subject<boolean>();
  loginStatusSubject$ = new Subject<boolean>();

  constructor() {
  }

  setLocalStorageItem(key, data): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalStorageItem(key): [] {
    return JSON.parse((localStorage.getItem(key)));
  }
}
