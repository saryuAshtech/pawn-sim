import { Injectable } from '@angular/core';
import { GLOBALS } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class ChessBoardService {
  // tslint:disable-next-line: variable-name
  private _row = 0;
  // tslint:disable-next-line: variable-name
  private _cols = 0;

  get row(): number {
    return this._row;
  }
  set row(r: number) {
    this._row = r;
  }
  get col(): number {
    return this._cols;
  }
  set col(c: number) {
    this._cols = c;
  }
  public static areValidCoordinates(r: number, c: number): boolean {
    return (
      r >= 0 && r <= GLOBALS.MAXROWS - 1 && c >= 0 && c <= GLOBALS.MAXCOLS - 1
    );
  }
}
