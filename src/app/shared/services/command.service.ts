import { Injectable } from '@angular/core';
import { IParser } from 'src/app/shared/interface/iparser';
import { Command, COMMAND_DICT } from '../globals';
@Injectable({
  providedIn: 'root',
})
export class CommandService implements IParser {
  constructor() { }
  public parse(inputCommand: string): Command {
    const command: Command = new Command();
    const cmd: string = inputCommand.trim().split(' ')[0];
    command.cmd = COMMAND_DICT[cmd] || COMMAND_DICT.NOT_VALID;
    return command;
  }
}