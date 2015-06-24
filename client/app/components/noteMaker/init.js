import angular from 'angular';

import {NoteMakerController as controller} from './controller';

import './style.css';
import template from './template.html';


let noteMakerModule = angular.module('noteMaker', [])
.directive('noteMaker', function() {
  return {
    template,
    controller,
    restrict: 'E'
  };
});

export {noteMakerModule};
