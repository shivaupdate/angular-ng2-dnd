import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  coordinateSystems = [
    {
      displayName: 'Hello 1',
      active: true
    },
    {
      displayName: 'Hello 2',
      active: true
    },
    {
      displayName: 'Hello 3',
      active: true
    },{
      displayName: 'Hello 4',
      active: true
    }

  ]
}
