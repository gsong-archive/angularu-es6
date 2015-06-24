import angular from 'angular';

import {NoteMakerComponent} from './component';


let noteMakerModule = angular.module('noteMaker', [])
.directive('noteMaker', NoteMakerComponent);

export {noteMakerModule};
