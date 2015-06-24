import {HomeController as controller} from './controller';

import './style.css';
import template from './template.html';


let homeComponent = function() {
  return {
    restrict: 'E',
    template,
    controller
  };
};

export {homeComponent};
