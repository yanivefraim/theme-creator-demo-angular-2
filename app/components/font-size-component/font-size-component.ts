import {Component, View, FORM_DIRECTIVES, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'font-size-component',
  properties: [
    'fontSize'
  ],
  events: [
    'fontSizeChanged'
  ]
})
@View({
  template: `<input id="fontSize" class="form-control" name="fontSize" [ng-model]="fontSize" (input)="onNewFontSize($event.target.value)"/>`,
  directives: [
    FORM_DIRECTIVES
  ]
})

export class FontSizeComponent {

  constructor() {

  }
  fontSizeChanged = new EventEmitter();
  onNewFontSize(value) {
    this.fontSizeChanged.next(value);
  }
}
