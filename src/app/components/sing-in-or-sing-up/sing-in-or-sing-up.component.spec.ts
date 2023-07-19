import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInOrSingUpComponent } from './sing-in-or-sing-up.component';

describe('SingInOrSingUpComponent', () => {
  let component: SingInOrSingUpComponent;
  let fixture: ComponentFixture<SingInOrSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInOrSingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingInOrSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
