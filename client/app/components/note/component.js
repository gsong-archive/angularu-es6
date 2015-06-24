import {NoteController as controller} from './controller';

import './style.css';
import template from './template.html';


let noteComponent = function() {
  return {
    restrict: 'E',
    scope: {noteData: '='},
    bindToController: true,
    template,
    controller,
    controllerAs: 'vm'
  };
};

export {noteComponent};
