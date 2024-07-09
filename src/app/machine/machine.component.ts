import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MachineState } from '../dummy-machines';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MachineComponent {
  @Input({required: true}) name!: string;

  @Input({required: true}) state!: MachineState;

  @Input() showIcon: boolean = true;

  public setClass() {
    return {
      'running': this.state === MachineState.running,
      'alarm' : this.state === MachineState.alarm,
      'warning' : this.state === MachineState.warning
    };
  }

  public isRunning(state: MachineState) {
    return state === MachineState.running;
  }

  public isAlarm(state: MachineState) {
    return state === MachineState.alarm;
  }

  public isWarning(state: MachineState) {
    return state === MachineState.warning;
  }
}
