import angular from 'angular';

import {noteMakerComponent} from './component';


let noteMakerModule = angular.module('noteMaker', [])
.directive('noteMaker', noteMakerComponent);

export {noteMakerModule};
