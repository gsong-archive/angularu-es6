class NoteController {
  constructor(Notes) {
    this.Notes = Notes;
  }

  delete(note) {
    this.Notes.remove(note.id);
  }
}

NoteController.$inject = ['Notes'];

export {NoteController};
