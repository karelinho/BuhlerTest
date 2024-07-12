import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MachineState, MachineType } from '../dummy-machines';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachineComponent {
  /**
   * Machine type.
   */
  @Input({required: true}) type!: MachineType;

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
   * Returms whether the machine is of type Scale.
   * @param type machine type
   * @returns true when type is Scale
   */
  public isScale(type: MachineType) {
    return type === MachineType.Scale;
  }

  /**
   * Returms whether the machine is of type Attacher.
   * @param type machine type
   * @returns true when type is Attacher
   */
  public isAttacher(type: MachineType) {
    return type === MachineType.Attacher;
  }

  /**
   * Returms whether the machine is of type Packer.
   * @param type machine type
   * @returns true when type is Packer
   */
  public isPacker(type: MachineType) {
    return type === MachineType.Packer;
  }

  /**
   * Returms whether the machine is of type Closer.
   * @param type machine type
   * @returns true when type is Closer
   */
  public isCloser(type: MachineType) {
    return type === MachineType.Closer;
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
