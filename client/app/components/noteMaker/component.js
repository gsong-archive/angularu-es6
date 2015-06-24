import {NoteMakerController as controller} from './controller';

import './style.css';
import template from './template.html';


let noteMakerComponent = function() {
  return {
    restrict: 'E',
    template,
    controller
  };
};

export {noteMakerComponent};
