import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {ThemeCreatorComponent} from './components/theme-creator-component/theme-creator-component';

@Component({
  selector: 'app'
})
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [ThemeCreatorComponent]
})
class App {
  fontColor: string;
  fontSize: string;
  fontFamily: string;
  font: any;
  constructor() {
    this.fontColor = "red";
    this.fontSize = "22";
    this.fontFamily = "Ariel";
  }
  // fontSizeChanged(value) {
  //   console.log(value);
  // }
}


bootstrap(App, []);
