import angular from 'angular';

import {noteComponent} from './component';


let noteModule = angular.module('note', [])
.directive('note', noteComponent);

export {noteModule};
