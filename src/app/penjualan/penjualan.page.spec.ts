import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenjualanPage } from './penjualan.page';

describe('PenjualanPage', () => {
  let component: PenjualanPage;
  let fixture: ComponentFixture<PenjualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjualanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenjualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
