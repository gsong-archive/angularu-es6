import angular from 'angular';

import {homeComponent} from './component.js';


let homeModule = angular.module('home', [])
.directive('home', homeComponent);

export {homeModule};
