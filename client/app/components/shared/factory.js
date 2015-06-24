import _ from 'lodash';

let count = 1;


let NotesFactory = () => {
  const notes = [{content: 'ABC', id: 1}];

  let all = () => {
    return notes;
  };

  let get = (id) => {
    return _.find(notes, {id});
  };

  let add = (content) => {
    let note = {content, id: ++count};
    notes.push(note);
    return note;
  };

  let remove = (id) => {
    _.remove(notes, {id});
  };

  return {
    add,
    all,
    get,
    remove
  };
};

export {NotesFactory};
