import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsTechnplogyComponent } from './project-details-technplogy.component';

describe('ProjectDetailsTechnplogyComponent', () => {
  let component: ProjectDetailsTechnplogyComponent;
  let fixture: ComponentFixture<ProjectDetailsTechnplogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsTechnplogyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsTechnplogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
