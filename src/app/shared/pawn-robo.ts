import { GLOBALS, Command, COMMAND_DICT, DIRECTION } from './globals';
import { IMoveAble } from './interface/imove-able';

export class PawnRobo implements IMoveAble {
  public static r: PawnRobo;
  x = -1;
  y = -1;
  nose: DIRECTION = DIRECTION.NONE;
  top: string = 90 + '%';
  left: string = 0 + '%';

  pawnHasBeenPlaced = false;
  public static getInstance() {
    if (!PawnRobo.r) {
      PawnRobo.r = new PawnRobo();
    }
    return PawnRobo.r;
  }

  initialize() {
    this.x = this.y = -1;
    this.nose = DIRECTION.NONE;
  }

  public mapCommand(command: Command): string {
    if (command) {
      if (this.pawnHasBeenPlaced) {
        switch (command.cmd) {
          case COMMAND_DICT.LEFT:
            this.rotate(GLOBALS.LEFT);
            return GLOBALS.SYS_MSG[COMMAND_DICT.LEFT];
          case COMMAND_DICT.RIGHT:
            this.rotate(GLOBALS.RIGHT);
            return GLOBALS.SYS_MSG[COMMAND_DICT.RIGHT];
          case COMMAND_DICT.REPORT:
            return this.report();
          case COMMAND_DICT.MOVE:
            return this.move();
          default:
            return GLOBALS.SYS_MSG[GLOBALS.UNKNOWN_COMMAND];
        }
      }
      if (!this.pawnHasBeenPlaced && command.cmd === COMMAND_DICT.PLACE) {
        return this.placeValidate(command.args);
      } else { return GLOBALS.SYS_MSG[GLOBALS.PLACEMENT_CONSTRAINT]; }
    }
    return GLOBALS.SYS_MSG[GLOBALS.UNKNOWN_COMMAND];
  }

  rotate(direction: number): void {
    // Will just move the direction
    // direction == -1 for LEFT
    // direction == 1 for RIGHT
    this.nose = (DIRECTION.COUNT + this.nose + direction) % DIRECTION.COUNT;
  }

  move(): string {
    // Will just move the position based on direction
    let validation = false;

    switch (this.nose) {
      case DIRECTION.NORTH:
        // increase y
        validation = this.validate(this.x, this.y + 1);
        this.y = validation ? this.y + 1 : this.y;
        if (this.y > 0) {
          this.top = (this.y % 2 === 0) ? 80 - this.y * 20 + '%' : 85 - this.y * 20 + '%';
        } else {
          this.top = '90%';
        }
        break;

      case DIRECTION.EAST:
        // increase x
        validation = this.validate(this.x + 1, this.y);
        this.x = validation ? this.x + 1 : this.x;
        if (this.x < 80) {
          this.left = this.x * 25 + '%';
        } else {
          this.left = '0%';
        }
        break;

      case DIRECTION.SOUTH:
        // decrease y
        validation = this.validate(this.x, this.y - 1);
        this.y = validation ? this.y - 1 : this.y;
        if (validation) {
          if (this.y < 80) {
            this.top = (this.y % 2 === 0) ? 80 - this.y * 20 + '%' : 85 - this.y * 20 + '%';
          } else {
            this.top = '90%';
          }
        }
        break;

      case DIRECTION.WEST:
        // decrease x
        validation = this.validate(this.x - 1, this.y);
        this.x = validation ? this.x - 1 : this.x;
        if (this.x > 0) {
          this.left = this.x * 25 + '%';
        } else {
          this.left = '0%';
        }
        break;
    }
    return validation
      ? GLOBALS.SYS_MSG[COMMAND_DICT.MOVE]
      : GLOBALS.SYS_MSG[GLOBALS.UNKNOWN_COMMAND];
  }

  private setDirection(f: string) {
    switch (f.toLowerCase()) {
      case 'n':
        this.nose = DIRECTION.NORTH;
        break;

      case 'e':
        this.nose = DIRECTION.EAST;
        break;

      case 's':
        this.nose = DIRECTION.SOUTH;
        break;

      case 'w':
        this.nose = DIRECTION.WEST;
        break;
    }
  }

  private validate(x: number, y: number): boolean {
    return x >= 0 && x < GLOBALS.MAXROWS && y >= 0 && y < GLOBALS.MAXCOLS;
  }

  private placeValidate(args: string[]): string {
    if (
      args.length === 3 &&
      this.validate(+args[0], +args[1]) &&
      args[2][0].toLowerCase().match('[nesw]')
    ) {
      // tslint:disable-next-line: radix
      if (parseInt(args[0]) > 0) {
        // tslint:disable-next-line: radix
        this.left = 20 * parseInt(args[0]) + 5 + '%';
      }
      // tslint:disable-next-line: radix
      if (parseInt(args[1]) > 0) {
        // tslint:disable-next-line: radix
        this.top = 80 - 20 * parseInt(args[1]) + '%';
      }
      this.place(+args[0], +args[1]);
      this.setDirection(args[2][0]);
      this.pawnHasBeenPlaced = true;
      return this.report();
    }
    return GLOBALS.SYS_MSG[GLOBALS.VALIDATION_CONSTRAINT];
  }

  private place(x: number, y: number) {
    // to place
    this.x = x;
    this.y = y;
  }

  private report(): string {
    // Will report
    const r = `Output: ${this.x}, ${this.y}, ${DIRECTION[this.nose]}`;
    return r;
  }
}
