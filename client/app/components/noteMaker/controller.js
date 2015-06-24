class NoteMakerController {
  constructor(Notes) {
    this.note = '';
    this.Notes = Notes;
  }

  addNote(content) {
    this.Notes.add(content);
    this.note = '';
  }
}

NoteMakerController.$inject = ['Notes'];

export {NoteMakerController};
