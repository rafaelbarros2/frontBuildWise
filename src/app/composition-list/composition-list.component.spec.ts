import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionListComponent } from './composition-list.component';

describe('CompositionListComponent', () => {
  let component: CompositionListComponent;
  let fixture: ComponentFixture<CompositionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompositionListComponent]
    });
    fixture = TestBed.createComponent(CompositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
