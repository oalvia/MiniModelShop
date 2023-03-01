import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdmenuComponent } from './ddmenu.component';

describe('DdmenuComponent', () => {
  let component: DdmenuComponent;
  let fixture: ComponentFixture<DdmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
