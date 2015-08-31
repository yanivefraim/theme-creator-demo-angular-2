import {Component, View, FORM_DIRECTIVES, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'font-color-component',
  properties: ['fontColor'],
  events: ['fontColorChange']
})
@View({
  template: `
    <input id="fontColor" [ng-model]="fontColor" (input)="fontColorChange.next($event.target.value)"/>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FontColorComponent {
  fontColor: string;
  fontColorChange = new EventEmitter();
}
