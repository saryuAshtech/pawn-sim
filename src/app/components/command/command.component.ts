import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommandService } from 'src/app/shared/services/command.service';
import { GLOBALS, COMMAND_DICT, Command } from 'src/app/shared/globals';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {
  @Output() commandReceived = new EventEmitter();

  title = 'Command Panel';

  constructor(public commandService: CommandService) {}

  ngOnInit() {}
  onCommand(cmd) {
    if (cmd) {
      let command: Command;
      command = this.commandService.parse(cmd.toUpperCase());
      if (command.cmd === COMMAND_DICT.NOT_VALID) {
        this.commandReceived.emit({
          msg: GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID],
        });
      } else {
        if (command.cmd === COMMAND_DICT.PLACE) {
          const [, ...args] = cmd.trim().split(' ');
          command.args = args;
        }
        this.commandReceived.emit({
          value: command,
          msg: GLOBALS.SYS_MSG[command.cmd],
        });
      }
    }
  }
}
