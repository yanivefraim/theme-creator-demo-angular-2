import {Component, View, EventEmitter} from 'angular2/angular2';
import {FontSizeComponent} from '../font-size-component/font-size-component';

@Component({
  selector: 'theme-editor-panel-component',
  properties: ['fontSize', 'fontColor', 'fontFamily'],
  events: ['onFontColorChange', 'onFontSizeChange', 'onFontFamilyChange']
})
@View({
  templateUrl: '../components/theme-editor-panel-component/theme-editor-panel-component.tpl.html',
  directives: [FontSizeComponent]
})
export class ThemeEditorPanelComponent {
  onFontSizeChange: EventEmitter = new EventEmitter();
  onFontColorChange: EventEmitter = new EventEmitter();
  onFontFamilyChange: EventEmitter = new EventEmitter();
  constructor() {
  }
  onFontSizeChangeEvent(fontSize) {
    this.onFontSizeChange.next(fontSize);
  }

  onFontColorChangeEvent(fontColor) {
    this.onFontColorChange.next(fontColor);
  }

  onFontFamilyChangeEvent(fontFamily) {
    this.onFontFamilyChange.next(fontFamily);
  }
}
