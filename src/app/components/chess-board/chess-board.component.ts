import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GLOBALS, Command, DIRECTION } from '../../shared/globals';
import { PawnRobo } from '../../shared/pawn-robo';


@Component({
  selector: 'app-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent implements OnInit {
  constructor() { }
  static rx = -1;
  static ry = -1;
  // tslint:disable-next-line: no-input-rename
  @Input('command') commandName: Command;
  @Output() commandExecuted = new EventEmitter();
  directionClass = '';
  XYDirectionStyle = {
    display: 'block',
    left: '0%',
    top: '0%',
  };
  rows: number[] = Array.from({ length: GLOBALS.MAXROWS }).map(
    (x, i) => GLOBALS.MAXROWS - 1 - i
  );
  cols: number[] = Array.from({ length: GLOBALS.MAXCOLS }).map((x, i) => i);

  ngOnInit() { }
  ngOnChanges(changes: any) {
    // add direction class depend on command fired.
    if (this.commandName) {
      const r: PawnRobo = PawnRobo.getInstance();
      const m: string = r.mapCommand(this.commandName);
      this.XYDirectionStyle.top = r.top;
      this.XYDirectionStyle.left = r.left;
      switch (r.nose) {
        case DIRECTION.NORTH:
          this.directionClass = 'North';
          break;

        case DIRECTION.EAST:
          this.directionClass = 'East';
          break;

        case DIRECTION.SOUTH:
          this.directionClass = 'South';
          break;

        case DIRECTION.WEST:
          this.directionClass = 'West';
          break;
      }
      ChessBoardComponent.rx = r.x;
      ChessBoardComponent.ry = r.y;
      this.commandExecuted.emit({ msg: m });
    }
  }
  classMap(r: number, c: number) {
    if (r === ChessBoardComponent.ry && c === ChessBoardComponent.rx) {
      return `${this.directionClass} has-pawn`;
    }
    return 'no-pawn';
  }
}
