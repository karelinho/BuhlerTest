import { Component, ViewEncapsulation } from '@angular/core';
import { DUMMY_MACHINES, Machine } from './dummy-machines';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'BuhlerTest';

  machines: Machine[] = DUMMY_MACHINES;
}
