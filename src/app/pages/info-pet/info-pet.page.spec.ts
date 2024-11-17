import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPetPage } from './info-pet.page';

describe('InfoPetPage', () => {
  let component: InfoPetPage;
  let fixture: ComponentFixture<InfoPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
