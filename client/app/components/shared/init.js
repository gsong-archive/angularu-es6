import angular from 'angular';

import {Notes} from './factory';


let sharedModule = angular.module('shared', [])
.factory('Notes', Notes);

export {sharedModule};
