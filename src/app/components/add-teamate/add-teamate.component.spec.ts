import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamateComponent } from './add-teamate.component';

describe('AddTeamateComponent', () => {
  let component: AddTeamateComponent;
  let fixture: ComponentFixture<AddTeamateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
