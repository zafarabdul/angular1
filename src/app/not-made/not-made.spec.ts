import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMade } from './not-made';

describe('NotMade', () => {
  let component: NotMade;
  let fixture: ComponentFixture<NotMade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotMade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotMade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
