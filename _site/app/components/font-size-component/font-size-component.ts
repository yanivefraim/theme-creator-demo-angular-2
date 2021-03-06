import {Component, View, EventEmitter, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'font-size-component',
  inputs: ['fontSize'],
  outputs: ['fontSizeChange']
})
@View({
  template: `
    <input id="fontSize" [(ng-model)]="fontSizeModel"/>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FontSizeComponent {
  fontSize: string;
  fontSizeChange: EventEmitter = new EventEmitter();

  get fontSizeModel() {
    return this.fontSize;
  }

  set fontSizeModel(value) {
    this.fontSizeChange.next(value);
  }
}
