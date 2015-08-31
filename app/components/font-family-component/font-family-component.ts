import {Component, View, FORM_DIRECTIVES, EventEmitter, NgFor} from 'angular2/angular2';

@Component({
  selector: 'font-family-component',
  properties: ['fontFamily'],
  events: ['fontFamilyChange']
})
@View({
  template: `
    <select class="form-control" [ng-model]="fontFamily" (input)="fontFamilyChange.next($event.target.value)">
      <option *ng-for="#font of fonts">{{font}}</option>
    </select>
  `,
  directives: [FORM_DIRECTIVES, NgFor]
})
export class FontFamilyComponent {
  fontFamily: string;
  fontFamilyChange = new EventEmitter();
  fonts: string[];
  constructor() {
    this.fonts = ['Helvetica', 'Ariel', 'fantasy', 'cursive'];
  }
}
