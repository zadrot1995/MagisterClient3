import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsDescriptionComponent } from './project-details-description.component';

describe('ProjectDetailsDescriptionComponent', () => {
  let component: ProjectDetailsDescriptionComponent;
  let fixture: ComponentFixture<ProjectDetailsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
