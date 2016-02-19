import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {HomeComponent} from './home.component';
import {TopicComponent} from './topic.component';

@Component({
    selector: 'my-app',
    template: '<h1>Home</h1>'
})

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/topics', name: 'Topics', component: TopicComponent},
])

export class AppComponent { }
