import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {FontColorComponent} from './components/font-color-component/font-color-component';
import {FontSizeComponent} from './components/font-size-component/font-size-component';
import {NamesList} from './services/NameList';

@Component({
  selector: 'app',
  viewBindings: [NamesList]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink, FontColorComponent, FontSizeComponent]
})
class App {
  fontColor: string;
  fontSize: string;
  constructor() {
    this.fontColor = "#444444";
    this.fontSize = "16";
  }
}


bootstrap(App, [routerInjectables]);
