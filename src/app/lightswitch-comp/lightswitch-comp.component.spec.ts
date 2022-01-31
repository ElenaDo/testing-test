import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchCompComponent } from './lightswitch-comp.component';

describe('LightswitchCompComponent', () => {
  let component: LightswitchCompComponent;
  let fixture: ComponentFixture<LightswitchCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn)
      .withContext('off at first')
      .toBe(false);
      component.switch();
    expect(component.isOn)
      .withContext('on after click')
      .toBe(true);
      component.switch();
    expect(component.isOn)
      .withContext('off after second click')
      .toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    let element = fixture.nativeElement;
  
    expect(element.textContent)
      .withContext('off at first')
      .toMatch(/is off/i);
    component.switch();
    fixture.detectChanges();
    expect(element.textContent)
      .withContext('on after clicked')
      .toMatch(/is on/i);
  });
});
