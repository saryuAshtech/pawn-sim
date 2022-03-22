/* tslint:disable:no-unused-variable */
import { PawnRobo } from './pawn-robo';
import { Command, COMMAND_DICT, DIRECTION } from './globals';

describe('App: PawnRobo', () => {
    // it('The pawn should not MOVE or ROTATE without PlACEMENT', () => {
    //     let r: PawnRobo = PawnRobo.getInstance();
    //     let c: Command = new Command();
    //     c.cmd = COMMAND_DICT.MOVE;
    //     r.mapCommand(c);
    //     expect(r.x).toEqual(-1);
    //     expect(r.y).toEqual(-1);
    //     c.cmd = COMMAND_DICT.LEFT;
    //     r.mapCommand(c);
    //     expect(r.nose).toEqual(DIRECTION.NONE);
    // });
    // it('The Pawn should MOVE after PlACEMENT', () => {
    //     let r: PawnRobo = PawnRobo.getInstance();
    //     let c: Command = new Command();
    //     r.initialize();
    //     c.cmd = COMMAND_DICT.PLACE;
    //     c.args = ['0', '0', 'NORTH'];
    //     r.mapCommand(c);
    //     expect(r.x).toEqual(2);
    //     expect(r.y).toEqual(1);
    //     expect(r.nose).toEqual(DIRECTION.NORTH);
    // });

    it('The Pawn should not fall off the table', () => {
        let r: PawnRobo = PawnRobo.getInstance();
        let c: Command = new Command();
        r.initialize();
        c.cmd = COMMAND_DICT.PLACE;
        c.args = ['5', '-1', 'NORTH'];
        r.mapCommand(c);
        expect(r.x).toEqual(-1);
        expect(r.y).toEqual(-1);
        expect(r.nose).toEqual(DIRECTION.NONE);

    });

    it('The Pawn should rotate anti clockwise on LEFT', () => {
        let r: PawnRobo = PawnRobo.getInstance();
        let c: Command = new Command();
        r.initialize();
        c.cmd = COMMAND_DICT.PLACE;
        c.args = ['1', '1', 'WEST'];
        r.mapCommand(c);

        //expect(r.x).toEqual(1)
        //expect(r.y).toEqual(1)
        //expect(r.nose).toEqual(DIRECTION.WEST)

        c.cmd = COMMAND_DICT.LEFT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.SOUTH); //From West to SOUTH

        c.cmd = COMMAND_DICT.LEFT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.EAST); //From SOUTH to EAST

        c.cmd = COMMAND_DICT.LEFT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.NORTH); //From EAST to NORTH

        c.cmd = COMMAND_DICT.LEFT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.WEST); //From North to West



    });
    it('The Pawn should rotate clockwise on RIGHT', () => {

        let r: PawnRobo = PawnRobo.getInstance();
        let c: Command = new Command();
        r.initialize();
        c.cmd = COMMAND_DICT.PLACE;
        c.args = ['1', '1', 'WEST'];
        r.mapCommand(c);

        c.cmd = COMMAND_DICT.RIGHT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.NORTH); //From WEST to NORTH

        c.cmd = COMMAND_DICT.RIGHT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.EAST); //From North to EAST

        c.cmd = COMMAND_DICT.RIGHT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.SOUTH); //From EAST to SOUTH

        c.cmd = COMMAND_DICT.RIGHT;
        r.mapCommand(c);
        expect(r.nose).toEqual(DIRECTION.WEST); //From SOUTH to WEST
    });
});