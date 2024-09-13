import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestpassPage } from './restpass.page';

describe('RestpassPage', () => {
  let component: RestpassPage;
  let fixture: ComponentFixture<RestpassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
