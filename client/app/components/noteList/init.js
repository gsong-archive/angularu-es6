import angular from 'angular';

import {NoteList} from './factory';
import {noteListComponent} from './component';


let noteListModule = angular.module('noteList', [])
.directive('noteList', noteListComponent)
.factory('NoteList', NoteList);

export {noteListModule};
