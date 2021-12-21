import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTabsComponent } from './games-tabs.component';

describe('GamesTabsComponent', () => {
  let component: GamesTabsComponent;
  let fixture: ComponentFixture<GamesTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
