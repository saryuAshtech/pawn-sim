import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChessBoardComponent } from './chess-board.component';

describe('ChessBoardComponent', () => {
  let component: ChessBoardComponent;
  let fixture: ComponentFixture<ChessBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessBoardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChessBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', async(() => {
    let fixture = TestBed.createComponent(ChessBoardComponent);
    fixture.detectChanges();
    let element = fixture.nativeElement;
    expect(element.querySelectorAll('table').length).toBe(1);
  }));
});
