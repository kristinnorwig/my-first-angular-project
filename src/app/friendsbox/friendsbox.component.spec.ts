import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsboxComponent } from './friendsbox.component';

describe('FriendsboxComponent', () => {
  let component: FriendsboxComponent;
  let fixture: ComponentFixture<FriendsboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendsboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
