import {Component, View, EventEmitter} from 'angular2/angular2';
import {ThemeEditorPanelComponent} from '../theme-editor-panel-component/theme-editor-panel-component';

@Component({
  selector: 'theme-creator-component',
  properties: ['fontSize', 'fontColor', 'fontFamily']
})
@View({
  templateUrl: '../components/theme-creator-component/theme-creator-component.tpl.html',
  directives: [ThemeEditorPanelComponent]
})
export class ThemeCreatorComponent {
  fontSize: string;
  fontColor: string;
  fontFamily: string;
  constructor() {
  }

  onFontSizeChange(fontSize) {
    this.fontSize = fontSize;
  }

  onFontColorChange(fontColor) {
    this.fontColor = fontColor;
  }

  onFontFamilyChange(fontFamily) {
    this.fontFamily = fontFamily;
  }
}
