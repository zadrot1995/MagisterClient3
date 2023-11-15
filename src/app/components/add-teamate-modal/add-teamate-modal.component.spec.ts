import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamateModalComponent } from './add-teamate-modal.component';

describe('AddTeamateModalComponent', () => {
  let component: AddTeamateModalComponent;
  let fixture: ComponentFixture<AddTeamateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeamateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
