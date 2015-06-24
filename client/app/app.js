import angular from 'angular';

import 'normalize.css';
import {
  homeModule,
  noteListModule,
  noteMakerModule,
  noteModule
} from './components/components';


angular.module('app', [
  homeModule.name,
  noteListModule.name,
  noteMakerModule.name,
  noteModule.name
]);
