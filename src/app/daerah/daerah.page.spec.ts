import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaerahPage } from './daerah.page';

describe('DaerahPage', () => {
  let component: DaerahPage;
  let fixture: ComponentFixture<DaerahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaerahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaerahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
