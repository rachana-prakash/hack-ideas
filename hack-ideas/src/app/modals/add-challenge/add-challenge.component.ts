import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import {Challenge} from '../../models/challenges.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.scss']
})
export class AddChallengeComponent implements OnInit {
  addChallengeForm: FormGroup = new FormGroup({});
  challenges: Challenge[];
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private utilService: UtilService, private router: Router) {
    this.challenges = this.utilService.getLocalStorageItem('challenge');
  }

  ngOnInit(): void {
    this.addChallengeForm = this.formBuilder.group({
      id: [],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tag: ['', [Validators.required]],
      date: [new Date()],
      count: [0]
    });
  }

  addChallenge(): void {
    if (this.addChallengeForm.valid) {
      this.errorMessage = '';
      this.addChallengeForm.controls.id.setValue(this.challenges.length + 1);
      this.challenges.push(this.addChallengeForm.value);
      this.utilService.setLocalStorageItem('challenge', this.challenges);
      this.utilService.updateChallengesSubject$.next(true);
      this.router.navigate([{outlets: {popup: null}}]);
    } else {
      this.errorMessage = 'All fields are required';
    }

  }

  cancel(): void {
    this.router.navigate([{outlets: {popup: null}}]);
  }

}
