import {NoteMakerController as controller} from './controller';

import './style.css';
import template from './template.html';


let NoteMakerComponent = function() {
  return {
    restrict: 'E',
    template,
    controller
  };
};

export {NoteMakerComponent};
