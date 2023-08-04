import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsBannerComponent } from './project-details-banner.component';

describe('ProjectDetailsBannerComponent', () => {
  let component: ProjectDetailsBannerComponent;
  let fixture: ComponentFixture<ProjectDetailsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
