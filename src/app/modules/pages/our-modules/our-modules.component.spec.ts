import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurModulesComponent } from './our-modules.component';

describe('OurModulesComponent', () => {
  let component: OurModulesComponent;
  let fixture: ComponentFixture<OurModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
