class NoteListController {
  constructor(NoteList) {
    this.NoteList = NoteList;
    this.notes = this.getAll();
  }

  add(content) {
    return this.NoteList.add(content);
  }

  get(id) {
    return this.NoteList.get(id);
  }

  getAll() {
    return this.NoteList.all();
  }
}

NoteListController.$inject = ['NoteList'];

export {NoteListController};
