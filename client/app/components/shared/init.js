import angular from 'angular';

import {NotesFactory} from './factory';


let sharedModule = angular.module('shared', [])
.factory('Notes', NotesFactory);

export {sharedModule};
