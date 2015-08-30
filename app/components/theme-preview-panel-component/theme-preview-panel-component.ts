import {Component, View, EventEmitter, NgStyle} from 'angular2/angular2';

@Component({
  selector: 'theme-preview-panel-component',
  properties: ['fontSize', 'fontColor', 'fontFamily']
})
@View({
    templateUrl: '../components/theme-preview-panel-component/theme-preview-panel-component.tpl.html',
    directives: [NgStyle]
})
export class ThemePreviewPanelComponent {
  fontFamily: string;
  fontColor: string;
  fontSize: string;
  constructor() {

  }
}
