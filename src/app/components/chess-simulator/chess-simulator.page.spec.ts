import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChessSimulatorPage } from './chess-simulator.page';

describe('ChessSimulatorPage', () => {
  let component: ChessSimulatorPage;
  let fixture: ComponentFixture<ChessSimulatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessSimulatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChessSimulatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
