import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddChallengeComponent} from './add-challenge.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('AddChallengeComponent', () => {
  let component: AddChallengeComponent;
  let fixture: ComponentFixture<AddChallengeComponent>;
  let challenges = [];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AddChallengeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    challenges = [{
      id: 1,
      title: 'Sales by Match',
      description: 'Test',
      tag: 'Tech',
      count: 1,
      date: new Date()
    },
      {
        id: 2,
        title: 'Counting Valleys',
        description: 'Test',
        tag: 'Tech',
        count: 2,
        date: new Date()
      },
      {
        id: 3,
        title: 'Repeated String',
        description: 'Test',
        tag: 'Feature',
        count: 0,
        date: new Date()
      }];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('addChallenge', () => {
    it('should increase the challenge array by 1', () => {
      component.challenges = challenges;
      component.addChallengeForm.patchValue({title: 'test', description: 'test desc', tag: 'tech'});
      component.addChallenge();
      expect(component.challenges.length).toBe(4);
    });
  });
});
