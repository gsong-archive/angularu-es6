import {NoteListController as controller} from './controller';

import './style.css';
import template from './template.html';


let noteListComponent = function() {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm'
  };
};

export {noteListComponent};
