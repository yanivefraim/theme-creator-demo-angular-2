import {Component, View, FORM_DIRECTIVES, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'font-size-component',
  properties: ['fontSize'],
  events: ['fontSizeChange']
})
@View({
  template: `
    <input id="fontSize" [(ng-model)]="fontSizeModel"/>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FontSizeComponent {
  fontSize: string;
  fontSizeChange = new EventEmitter();

  get fontSizeModel() {
    return this.fontSize;
  }

  set fontSizeModel(value) {
    this.fontSizeChange.next(value);
  }
}
