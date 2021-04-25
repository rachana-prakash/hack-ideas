import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let challenges = [];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
  describe('vote: upvote', () => {
    it('should increment count', () => {
      component.codeChallenges = challenges;
      component.vote('upvote', challenges[1]);
      expect(component.codeChallenges[1].count).toBe(3);
    });
  });
  describe('vote: downvote', () => {
    it('should decrement count', () => {
      component.codeChallenges = challenges;
      component.vote('downvote', challenges[0]);
      expect(component.codeChallenges[0].count).toBe(0);
    });
  });
  describe('sort by count: desc', () => {
    it('first count should be the highest count', () => {
      component.codeChallenges = challenges;
      component.sortCountChallenges('desc');
      expect(component.codeChallenges[0].count).toBe(2);
    });
  });
  describe('sort by count: asc', () => {
    it('first count should be the lowest count', () => {
      component.codeChallenges = challenges;
      component.sortCountChallenges('asc');
      expect(component.codeChallenges[0].count).toBe(0);
    });
  });
});
