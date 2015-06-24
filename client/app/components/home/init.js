import angular from 'angular';

import {HomeController as controller} from './controller';

import './style.css';
import template from './template.html';


let homeModule = angular.module('home', [])
.directive('home', function() {
  return {
    template,
    controller,
    restrict: 'E'
  };
});

export {homeModule};
