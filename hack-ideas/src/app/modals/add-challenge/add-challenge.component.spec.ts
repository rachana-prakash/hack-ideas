import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddChallengeComponent} from './add-challenge.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('AddChallengeComponent', () => {
  let component: AddChallengeComponent;
  let fixture: ComponentFixture<AddChallengeComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
