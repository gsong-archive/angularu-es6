import angular from 'angular';

import 'normalize.css';
import {homeModule, noteMakerModule} from './components/components';


angular.module('app', [
  homeModule.name, noteMakerModule.name
]);
