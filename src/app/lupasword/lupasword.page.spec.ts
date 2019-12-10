import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LupaswordPage } from './lupasword.page';

describe('LupaswordPage', () => {
  let component: LupaswordPage;
  let fixture: ComponentFixture<LupaswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupaswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LupaswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
