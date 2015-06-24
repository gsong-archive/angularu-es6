import angular from 'angular';

import {HomeComponent} from './component.js';


let homeModule = angular.module('home', [])
.directive('home', HomeComponent);

export {homeModule};
