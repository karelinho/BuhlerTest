import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DUMMY_MACHINES, Machine } from './dummy-machines';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  /**
   * Testing data of machines.
   */
  machines: Machine[] = DUMMY_MACHINES;

  /**
   * Date used in toolbar.
  */
  today: number = Date.now();
}
