import {Component, View, NgModel} from 'angular2/angular2';

@Component({
  selector: 'font-size-component',
  properties: [
    'fontSize'
  ],
  events: ['fontSizeChanged']
})
@View ({
  template: `<input id="fontSize" class="form-control" name="fontSize" [ng-model]="fontSize"/>`,
  directives: [
    NgModel
  ]
})

export class FontSizeComponent {
  fontSize: string;
  fontSizeChanged: Function;
  constructor() {
  }

  fontSizeChangedEvent() {
    this.fontSizeChanged({fontSize: this.fontSize});
  }
}
