import {Component, View, bootstrap} from 'angular2/angular2';
//import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {FontColorComponent} from './components/font-color-component/font-color-component';
import {FontSizeComponent} from './components/font-size-component/font-size-component';

@Component({
  selector: 'app'
})
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [FontColorComponent, FontSizeComponent]
})
class App {
  fontColor: string;
  fontSize: string;
  constructor() {
    this.fontColor = "#444444";
    this.fontSize = "16";
  }
}


bootstrap(App, []);
