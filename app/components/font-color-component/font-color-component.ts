import {Component, View, NgModel} from 'angular2/angular2';

@Component({
  selector: 'font-color-component',
  properties: [
    'fontColor'
  ]
})
@View({
  template: `<input id="fontColor" class="form-control" name="fontColor" [ng-model]="fontColor"/>`,
  directives: [
    NgModel
  ]
})
export class FontColorComponent {
  fontColorChanged: Function;
  fontColor: string;
  constructor() {
    this.fontColor = 'red';
    console.log(this.fontColor);
  }

  fontColorChangedEvent() {
    this.fontColorChanged({ fontColor: this.fontColor });
  }
}


// export default angular
//   .module('themeCreatorFontColorComponentModule', [template.name])
//   .directive('fontColorComponent', function() {
//     return {
//       templateUrl: template.name,
//       scope: {
//         fontColor: '@',
//         fontColorChanged: '&'
//       },
//       bindToController: true,
//       controllerAs: 'ctrl',
//       controller: FontColorComponent
//     };
//   });
