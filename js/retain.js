(() => {

  const $ = document.querySelector.bind(document);

  class Model {

    static init() {

      if (!localStorage.notes) localStorage.notes = JSON.stringify([]);

    }

    static add(obj) {

      let data = JSON.parse(localStorage.notes);
      data.push(obj);
      localStorage.notes = JSON.stringify(data);

    }

    static getAllNotes() {

      return JSON.parse(localStorage.notes);

    }

  }


  class Octopus {

    static addNewNote(noteStr) {

      Model.add({
        content: noteStr,
        date: Date.now()
      });

      View.render();

    }

    static getNotes() {

      return Model.getAllNotes();

    }

    static init() {

      Model.init();
      View.init();

    }

  }

  class View {

    static init() {

      this.noteList = $('#notes');
      const newNoteForm = $('#new-note-form');
      const newNoteContent = $('#new-note-content');
      newNoteForm.addEventListener('submit', function(e){
        Octopus.addNewNote(newNoteContent.value);
        newNoteContent.value = '';
        e.preventDefault();
      });

      View.render();

    }

    static render() {

      let htmlStr = '';

      Octopus.getNotes()
        .forEach(note => htmlStr +=
          `<li class="note">
            ${note.content}
            <p class="note-date">
              ${new Date(note.date).toString()}
            </p>
          </li>`);

      this.noteList.innerHTML = htmlStr;

    }

  }

  Octopus.init();

})();
