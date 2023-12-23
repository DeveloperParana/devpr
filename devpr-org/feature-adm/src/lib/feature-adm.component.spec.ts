import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAdmComponent } from './feature-adm.component';

describe('FeatureAdmComponent', () => {
  let component: FeatureAdmComponent;
  let fixture: ComponentFixture<FeatureAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAdmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
