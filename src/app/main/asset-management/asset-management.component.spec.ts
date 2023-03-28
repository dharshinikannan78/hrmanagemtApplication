import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetComponent } from './asset-management.component';

describe('AttendanceComponent', () => {
  let component: AssetComponent;
  let fixture: ComponentFixture<AssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
