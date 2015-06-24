import _ from 'lodash';
import angular from 'angular';

let count = 1;


let NotesFactory = ($http) => {
  let notes = [];
  const api = 'http://localhost:3100/notes';

  let all = () => {
    return $http.get(api)
    .then(({data}) => {
      angular.copy(data, notes);
    });
  };

  let getState = () => {
    all();
    return notes;
  };

  let get = (id) => {
    return _.find(notes, {id});
  };

  let add = (content) => {
    $http.post(api, {content, id: ++count})
    .then(({data}) => all());
  };

  let remove = (id) => {
    $http.delete(api + '/' + id)
    .then(() => all());
  };

  return {
    add,
    all,
    get,
    getState,
    remove
  };
};

export {NotesFactory};
