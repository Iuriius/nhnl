import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroswiperComponent } from './heroswiper.component';

describe('HeroswiperComponent', () => {
  let component: HeroswiperComponent;
  let fixture: ComponentFixture<HeroswiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroswiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
