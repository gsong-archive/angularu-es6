class NoteListController {
  constructor(Notes) {
    this.Notes = Notes;
    this.notes = this.getAll();
  }

  getAll() {
    return this.Notes.all();
  }
}

NoteListController.$inject = ['Notes'];

export {NoteListController};
