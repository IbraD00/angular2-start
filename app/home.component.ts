import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'templates/home/index.html',
})

export class HomeComponent {
  test() {
    alert(2);
  }
}
