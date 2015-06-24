import _ from 'lodash';

let count = 0;


let NoteList = () => {
  const notes = [{content: 'ABC'}];

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

  return {
    add,
    all,
    get
  };
};

export {NoteList};
