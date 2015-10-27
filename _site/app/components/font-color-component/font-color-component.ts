import {Component, View, FORM_DIRECTIVES, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'font-color-component',
  inputs: ['fontColor'],
  outputs: ['fontColorChange']
})
@View({
  template: `
    <input id="fontColor" [ng-model]="fontColor" (input)="modelChanged($event.target.value)"/>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FontColorComponent {
  fontColor: string;
  fontColorChange = new EventEmitter();
  constructor() {
  }
  modelChanged($event) {
    this.fontColorChange.next($event);
  }
}
