import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {TopicComponent} from './topic.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/index.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/topics', name: 'Topics', component: TopicComponent},
  { path: '/login', name: 'Login', component: LoginComponent},
  { path: '/register', name: 'Register', component: RegisterComponent},
])

export class AppComponent { }
