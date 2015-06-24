class NoteListController {
  constructor(Notes) {
    this.Notes = Notes;
    this.notes = this.getAll();
  }

  add(content) {
    return this.Notes.add(content);
  }

  get(id) {
    return this.Notes.get(id);
  }

  getAll() {
    return this.Notes.all();
  }
}

NoteListController.$inject = ['Notes'];

export {NoteListController};
