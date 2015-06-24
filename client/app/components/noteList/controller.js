class NoteListController {
  constructor(Notes) {
    this.Notes = Notes;
    this.notes = Notes.getState();
  }

  getAll() {
    return this.Notes.all();
  }
}

NoteListController.$inject = ['Notes'];

export {NoteListController};
