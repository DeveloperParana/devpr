import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureConfComponent } from './feature-conf.component';

describe('FeatureConfComponent', () => {
  let component: FeatureConfComponent;
  let fixture: ComponentFixture<FeatureConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureConfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
