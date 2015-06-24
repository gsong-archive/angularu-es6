import angular from 'angular';

import {noteListComponent} from './component';


let noteListModule = angular.module('noteList', [])
.directive('noteList', noteListComponent);

export {noteListModule};
