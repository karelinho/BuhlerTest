import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MachineState } from '../dummy-machines';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachineComponent {
  /**
   * Machine name.
   */
  @Input({required: true}) name!: string;

  /**
   * Machine state.
   */
  @Input({required: true}) state!: MachineState;

  /**
   * Whether to show icon above the name. Default is false.
   */
  @Input() showIcon: boolean = false;

  /**
   * Returns an object containing css classes according to the machine state.
   * @returns Object containing css classes.
   */
  public setStateClass() {
    return {
      'running': this.state === MachineState.running,
      'alarm' : this.state === MachineState.alarm,
      'warning' : this.state === MachineState.warning
    };
  }

  /**
   * Returns whether the state is running.
   * @param state machine state
   * @returns true when the state is running
   */
  public isRunning(state: MachineState) {
    return state === MachineState.running;
  }

  /**
   * Returns whether the state is alarm.
   * @param state machine state
   * @returns true when the state is alarm
   */
  public isAlarm(state: MachineState) {
    return state === MachineState.alarm;
  }

  /**
   * Returns whether the state is warning.
   * @param state machine state
   * @returns true when the state is warning
   */
  public isWarning(state: MachineState) {
    return state === MachineState.warning;
  }
}
