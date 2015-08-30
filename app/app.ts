import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

//import {FontColorComponent} from './components/font-color-component/font-color-component';
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
  font: any;
  constructor() {
    this.fontColor = "#444444";
    this.fontSize = "22";//{ 'fontSize': "16" };
  }
  // fontSizeChanged(value) {
  //   console.log(value);
  // }
}


bootstrap(App, []);
