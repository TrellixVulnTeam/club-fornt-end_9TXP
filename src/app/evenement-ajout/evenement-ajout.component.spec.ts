import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementAjoutComponent } from './evenement-ajout.component';

describe('EvenementAjoutComponent', () => {
  let component: EvenementAjoutComponent;
  let fixture: ComponentFixture<EvenementAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
