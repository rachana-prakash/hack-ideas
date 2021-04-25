import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimaryHeaderComponent} from './primary-header.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PrimaryHeaderComponent', () => {
  let component: PrimaryHeaderComponent;
  let fixture: ComponentFixture<PrimaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PrimaryHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
