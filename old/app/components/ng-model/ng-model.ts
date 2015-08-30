import {Directive} from 'angular2/angular2';


@Directive({
  selector: '[ng-model]',
  properties: ['ngModel'],
  host: {
    "[value]": 'ngModel'
  }
})
export class NgModelDirective {
  ngModel: any; // stored value

}
